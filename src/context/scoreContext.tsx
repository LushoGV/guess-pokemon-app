import { createContext, useContext, useEffect, useState } from "react";
import { getPokemon } from "../api";
import { pokemon, user } from "../types";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface context {
  user: user;
  data: pokemon;
  loading: boolean;
  showAlert: boolean;
  inputContent: string;
  setInputContent: (value: React.SetStateAction<string>) => void;
  getData: () => Promise<void>;
  verify: () => void;
  restartGame: () => void;
}

const initialUserState: user = {
  points: 0,
  lives: 3,
  isCorrect: false,
};

const initialDataState: pokemon = { id: 0, name: "", image: "" };

export const ScoreContext = createContext<context>({} as context);

export const ScoreProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<pokemon>(initialDataState);
  const [user, setUser] = useState<user>(initialUserState);
  const [inputContent, setInputContent] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const saveData = () => {

    localStorage.userData ?     
      localStorage.setItem('userData',JSON.stringify(user))  
    : localStorage.setItem('userData', JSON.stringify({
      points: 0,
      lives: 3,
      isCorrect: false,
    }))

  }

  const getData = async () => {
    setLoading(true);
    const data = await getPokemon();
    setTimeout(() => { 
    setLoading(false), setData(data) 
    }, 2000);
    // setLoading(false);
    // setData(data);
    // console.log(data.name);
  };

  const verify = () => {
    if (
      inputContent.toLocaleLowerCase().trim() ===
      data.name.toLocaleLowerCase().trim()
      ) {
      setUser({ ...user, points: user.points + 1, isCorrect: true });   
    } else {
      user.lives > 0 &&
       setUser({ ...user, lives: user.lives - 1, isCorrect: false });   
    }

    setInputContent("");
    setShowAlert(true);
    
    setTimeout(() => {
      saveData()
      setData(initialDataState);
      getData();
      setShowAlert(false);
    }, 2000);
    
  };

  const restartGame = () => {
    setUser(initialUserState);
    setLoading(true)
    setData(initialDataState);
    setShowAlert(false)
    localStorage.clear()
    setInputContent("");
    setTimeout(() => {
      getData();
      },1000)
  };

  useEffect(() => {
    setData(initialDataState);
    getData();
    localStorage.userData && setUser(JSON.parse(localStorage.userData))
  }, []);

  return (
    <ScoreContext.Provider
      value={{
        loading,
        user,
        data,
        showAlert,
        inputContent,
        setInputContent,
        getData,
        verify,
        restartGame,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => {
  const {
    loading,
    user,
    data,
    showAlert,
    inputContent,
    setInputContent,
    getData,
    verify,
    restartGame,
  } = useContext(ScoreContext);

  return {
    loading,
    user,
    data,
    showAlert,
    inputContent,
    setInputContent,
    getData,
    verify,
    restartGame,
  };
};

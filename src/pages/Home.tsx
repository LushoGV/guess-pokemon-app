import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-col justify-start items-center relative w-full p-5 mt-4">
        <div className="flex justify-center items-center relative w-full">
          <h1 className="text-2xl md:text-4xl text-yellow-400 z-10">Who's that</h1>
          <h1 className="text-2xl md:text-4xl text-blue-700 absolute top-1 pl-4">
            Who's that
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center relative w-full md:mt-4">
          <h1 className="text-4xl md:text-7xl text-yellow-400 z-10">Pokémon?</h1>
          <h1 className="text-4xl md:text-7xl text-blue-700 absolute top-1 pl-4">
            Pokémon?
          </h1>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center mt-4 mb-20 p-5">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
          className="brightness-0 h-80 mb-4"
        />
        <button
          onClick={() => navigate("/play")}
          className="nes-btn is-warning w-44 h-14 rounded-sm"
        >
          Start
        </button>
      </section>
    </>
  );
};

export default Home;

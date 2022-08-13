import { useEffect } from "react";
import Dialog from "../components/Dialog";
import GameOver from "../components/GameOver";
import { useScoreContext } from "../context/scoreContext";

const Game = () => {
  const {
    data,
    loading,
    user,
    showAlert,
    inputContent,
    setInputContent,
    restartGame,
    verify,
  } = useScoreContext();

  useEffect(()=>{
   user.lives === 0 && restartGame()
  },[])

  return (
    <>
      {user.lives != 0 ? (
        <>
          <header className="w-full flex flex-col justify-center items-center md:mb-8">
            <div className="overflow-x-hidden overflow-y-hidden md:overflow-visible flex flex-col items-center md:justify-between md:items-center relative w-full max-h-36 h-36">
              <div className="flex flex-row w-full mt-0 border-b-4 border-x-4 bg-gray-200 border-gray-800 md:bg-gray-200 border-3 md:rounded-b-md">
                <div className="flex w-full bg-white border-r-4 border-b-4 border-gray-400">
                  <div className="flex pl-4 py-2 pr-6 md:pr-6 md:pl-4 md:p-2">
                    <span className="text-gray-600 mr-2">points:</span>
                    <span className="text-blue-500">{user.points}</span>
                  </div>
                  <div className="flex pl-4 py-2 pr-5 md:px-0 md:p-2">
                    <span className="text-gray-600 mr-2">lives:</span>
                    <span className="text-blue-500">{user.lives}</span>
                  </div>
                </div>
              </div>
              {showAlert && (
                <div
                  className={
                    user.isCorrect
                      ? "nes-container is-rounded text-center bg-green-300 h-16 md:w-60 absolute bottom-5 md:bottom-0"
                      : "nes-container is-rounded text-center bg-red-400 h-16 md:w-60 absolute bottom-5 md:bottom-0"
                  }
                >
                  <h2 className="pb-3">
                    {user.isCorrect ? "Correct!" : "Incorrect!"}
                  </h2>
                </div>
              )}
            </div>
          </header>
          {data.name.length > 0 && (
            <section className="z-10 flex flex-col justify-center items-center w-full md:min-h-full">
              <img
                src={data.image}
                className={
                  showAlert
                    ? "brightness-100 h-96 lg:w-10/12 mb-5 md:max-w-md relative"
                    : "brightness-0 h-96 lg:w-10/12 mb-5 md:max-w-md relative"
                }
                alt=""
              />
              <div className="w-full h-96 top-60 absolute"></div>

              <section className="fixed bottom-0 border-4 border-gray-800 rounded-lg w-full lg:max-w-4xl md:mt-8">
                <div className="relative flex flex-col items-center justify-center bg-gray-200 p-5 border-r-4 border-b-4 border-gray-400">
                  <div className="flex flex-col mb-4 md:flex-row md:w-full md:mb-10">
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled={showAlert}
                      value={inputContent}
                      placeholder="insert pokemon"
                      onChange={(e) => {
                        setInputContent(e.target.value);
                      }}
                      className="nes-input bg-white outline-none"
                    />
                    <button
                      disabled={!inputContent.length && true}
                      onClick={verify}
                      className={
                        inputContent.length
                          ? "nes-btn is-warning"
                          : "nes-btn is-disabled"
                      }
                    >
                      enviar
                    </button>
                  </div>
                  <Dialog />
                </div>
              </section>
            </section>
          )}
        </>
      ) : (
        <GameOver />
      )}
      {loading && (
        <div className="flex flex-col justify-center h-96">
          <i className="nes-pokeball animate-bounce brightness-75"></i>
        </div>
      )}
    </>
  );
};

export default Game;

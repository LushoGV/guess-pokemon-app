import { useNavigate } from "react-router-dom";
import { useScoreContext } from "../context/scoreContext";

const GameOver = () => {
  const navigate = useNavigate();
  const { user, restartGame } = useScoreContext();

  return (
    <section className="z-10 flex flex-col justify-center items-center">
      <div className="nes-dialog is-rounded flex flex-col items-center bg-gray-200 w-80 md:w-96 mt-28">
        <h1 className="text-red-600 text-xl">Game Over</h1>
        <p>score: {user.points}</p>
        <div className="flex flex-col m-8 w-full h-32 justify-evenly">
          <button className="nes-btn is-warning" onClick={restartGame}>
            Restart
          </button>
          <button className="nes-btn is-primary" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameOver;

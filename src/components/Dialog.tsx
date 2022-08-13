import { useState } from "react";
import { useScoreContext } from "../context/scoreContext";

const Dialog = () => {
  const [dialogState, setDialogState] = useState<boolean>(false);
  const { restartGame } = useScoreContext();

  return (
    <section>
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={() => setDialogState(true)}
      >
        Restart Game
      </button>
      {dialogState && (
        <div
          className="nes-dialog absolute z-0 bottom-8 right-0 left-0 flex flex-col justify-center items-center min-w-full border-none min-h-screen"
          onBlur={() => setDialogState(false)}
        >
          <form
            method="dialog"
            className="z-10 bg-white nes-container is-rounded w-80"
          >
            <p className="title text-2xl">Start over?</p>
            <p className="text-xs mb-12">
              Alert: all your stats will be deleted
            </p>
            <menu className="dialog-menu flex">
              <button
                className="nes-btn w-32"
                onClick={() => setDialogState(false)}
              >
                No
              </button>
              <button
                className="nes-btn is-error bg-red-600 w-32"
                onClick={() => {
                  restartGame(), setDialogState(false);
                }}
              >
                Yes
              </button>
            </menu>
          </form>
        </div>
      )}
    </section>
  );
};

export default Dialog;

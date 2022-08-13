import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col items-center overflow-y-hidden">
      <div className="bg-white border-4 border-gray-800 mt-20 rounded-md">
        <div className="flex flex-col border-r-4 border-b-4 border-gray-400 p-5 items-center">
          <h1 className="mt-20 mb-16 text-3xl md:text-5xl text-gray-500">
            Error #404
          </h1>
          <button
            className="nes-btn is-warning w-40 h-14"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;

import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-red-500 flex justify-center items-center border-y-4 border-gray-800 mb-0">
      <div className="flex w-full justify-between items-center  bg-red-500 border-r-4 border-b-4 border-red-300">
        <span className="relative md:max-w-4xl" onClick={() => navigate("/")}>
          <h1 className="text-2xl md:text-3xl text-blue-600 z-10 pl-1 pt-1 ml-3 mr-3 mt-2">
            Pokémon
          </h1>
          <h1 className="text-2xl md:text-3xl text-yellow-400 absolute top-0 ml-3 mr-3 mt-2">
            Pokémon
          </h1>
        </span>
        <button className="bg-black rounded-md h-8 mr-3">
          <i className="nes-icon github"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

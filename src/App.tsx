import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Navbar from './components/Navbar'
import Error from "./pages/Error";

function App(): ReactElement {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
      <Navbar/>
        <main className="w-full flex flex-col justify-start items-center text-white-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Game />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

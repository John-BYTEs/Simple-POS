import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBar = () => {
      setIsOpen(true);
    };

  return (
    <>
      <nav className="w-full bg-cyan-500 px-6 py-4 shadow-sm drop-shadow-xl flex justify-between items-center">
        <div>
          <button onClick={handleSideBar} className="text-2xl text-orange-100">
            ☰
          </button>
        </div>

        <div className="font-bold">
          <h2 className="text-xl font-mono text-white">Simple Point-Of-Sale</h2>
          <p className="text-xs font-mono text-white">
            By Estrellada, Estalilla, Wolfe
          </p>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} isClose={() => {setIsOpen(false)}}/>
    </>
  );
}

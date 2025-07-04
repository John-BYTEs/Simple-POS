import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed w-full bg-cyan-500 px-6 py-4 shadow-sm drop-shadow-xl flex justify-between items-center">
        <div>
          <button onClick={handleSideBar} className="text-2xl text-orange-100">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>

        <div className="font-bold">
          <h2 className="text-xl font-mono text-white">Simple Point-Of-Sale</h2>
          <p className="text-xs font-mono text-cyan-950">
            By Estrellada, Estalilla, Wolfe
          </p>
        </div>
      </nav>
      <Sidebar
        isOpen={isOpen}
        isClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

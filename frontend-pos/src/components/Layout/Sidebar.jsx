import { useState } from "react";

export default function Sidebar({ isOpen, isClose }) {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-orange-700 text-white font-mono p-6 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={isClose}
          className="text-white text-2xl mb-4 border-b pr-45 hover:cursor-pointer"
        >
          ☰
        </button>
        <ul className="space-y-3 font-bold ">
          <li className="text-white cursor-pointer">
            <div className="hover:bg-orange-600 p-2 rounded text-lg">Stocks</div>
          </li>
        </ul>
      </aside>
    </>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, isClose }) {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-cyan-400 text-white font-mono p-6 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-3 font-bold mb-5">
          <button
            onClick={isClose}
            className="text-cyan-800 text-2xl border-b pr-46 hover:cursor-pointer"
          >
            <span className="material-symbols-outlined w-full">arrow_back</span>
          </button>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cyan-100" : "text-cyan-800"
            }
          >
            <div className="grid grid-cols-6 hover:bg-cyan-100 hover:text-cyan-600 p-2">
              <span class="material-symbols-outlined">home</span>
              Home
            </div>
          </NavLink>

          <hr className="my-2 opacity-0" />

          <NavLink
            to="/stocks"
            className={({ isActive }) =>
              isActive ? "text-cyan-100" : "text-cyan-800"
            }
          >
            <div className="grid grid-cols-6 hover:bg-cyan-100 hover:text-cyan-600 p-2">
              <span class="material-symbols-outlined">inventory_2</span>
              Stocks
            </div>
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "text-cyan-100" : "text-cyan-800"
            }
          >
            <div className="grid grid-cols-6 hover:bg-cyan-100 hover:text-cyan-600 p-2">
              <span class="material-symbols-outlined">receipt_long</span>
              <h1>Transactions</h1>
            </div>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}

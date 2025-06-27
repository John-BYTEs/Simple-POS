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
        <ul className="space-y-3 font-bold mb-5 text-lg">
          <button
            onClick={isClose}
            className="text-cyan-800 text-2xl border-b pr-46 hover:cursor-pointer"
          >
            <span className="material-symbols-outlined w-full">arrow_back</span>
          </button>

          <NavLink to="/">
            {({ isActive }) => (
              <div
                className={`grid grid-cols-6 items-center gap-2 p-2 ${
                  isActive
                    ? "text-cyan-100  font-bold border-l-2"
                    : "text-cyan-800 hover:bg-cyan-100 hover:text-cyan-600"
                }`}
              >
                <span className="material-symbols-outlined">home</span>
                <p>Home</p>
              </div>
            )}
          </NavLink>

          <hr className="my-2 opacity-0" />

          <NavLink to="/stocks">
            {({ isActive }) => (
              <div
                className={`grid grid-cols-6 items-center gap-2 p-2 ${
                  isActive
                    ? "text-cyan-100  font-bold border-l-2"
                    : "text-cyan-800 hover:bg-cyan-100 hover:text-cyan-600"
                }`}
              >
                <span className="material-symbols-outlined">inventory_2</span>
                <p>Stocks</p>
              </div>
            )}
          </NavLink>
          <NavLink to="/transactions">
            {({ isActive }) => (
              <div
                className={`grid grid-cols-6 items-center gap-2 p-2 ${
                  isActive
                    ? "text-cyan-100  font-bold border-l-2"
                    : "text-cyan-800 hover:bg-cyan-100 hover:text-cyan-600"
                }`}
              >
                <span className="material-symbols-outlined">receipt_long</span>
                <p>Transactions</p>
              </div>
            )}
          </NavLink>
        </ul>
      </aside>
    </>
  );
}

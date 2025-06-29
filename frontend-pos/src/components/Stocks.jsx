import { NavLink } from "react-router-dom";
import AddProduct from "./AddProduct";

export default function Stocks() {
  return (
    <>
      <div className="py-50 font-mono font-bold flex justify-center">
        <div className="grid grid-cols-2 gap-10 text-center">
          <NavLink to="/stocks/addStocks">
            <div className="bg-white rounded-lg w-32 h-32 flex items-center justify-center shadow hover:bg-amber-100 transition">
              Add Stocks
            </div>
          </NavLink>
          <NavLink to="/stocks/addProduct">
            <div className="bg-white rounded-lg w-32 h-32 flex items-center justify-center shadow hover:bg-amber-100 transition">
              Add Product
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

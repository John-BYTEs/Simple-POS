import { useState } from "react";
import api from "./axiosAPI/axiosapi";

export default function Stocks() {
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/restock", form);
      setForm({ name: "", price: "", stock: "" });
      console.log(res.data.message);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-4 col-start-2 bg-white rounded-lg shadow m-5 mt-15 font-mono text-xl text-center text-cyan-50">
          <form onSubmit={submit} className="flex flex-col p-2 bg-cyan-800 rounded focus:outline-none focus:ring-0 focus:border-white">
            <h1 className="mt-3 mb-3 ">Stock New Product</h1>
            <input
              name="name"
              value={form.name}
              onChange={change}
              placeholder="Enter Product Name"
              className="col-span-2 border rounded p-2 pl-5 m-3"
            />
            <input
              name="price"
              value={form.price}
              onChange={change}
              placeholder="Enter Price"
              className="col-span-2 border rounded p-2 pl-5 m-3"
            />
            <input
              name="stock"
              value={form.stock}
              onChange={change}
              placeholder="Enter Stocks"
              className="col-span-2 border rounded p-2 pl-5 m-3"
            />
            <button
              type="submit"
              className="bg-green-400 m-2 mt-7 rounded-4xl p-3 hover:bg-green-800"
            >
              Stock
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

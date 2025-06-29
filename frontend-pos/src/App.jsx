
import "./App.css";
import * as Sentry from "@sentry/react";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import { Routes, Route, Router } from "react-router-dom";
import Stocks from "./components/Stocks";
import Transaction from "./components/Transaction";
import AddProduct from "./components/AddProduct";

const App = () => {
  

  return (
    <>
      <Sentry.ErrorBoundary fallback={"Something went wrong!"}>
        <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/stocks" element={<Stocks />}/>
              <Route path="/transactions" element={<Transaction />}/>
              <Route path="/stocks/addProduct" element={<AddProduct />}/>
            </Routes>
          </div>
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;

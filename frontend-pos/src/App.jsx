
import "./App.css";
import * as Sentry from "@sentry/react";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import { Routes, Route, Router } from "react-router-dom";
import Stocks from "./components/Stocks";
import Transaction from "./components/Transaction";

const App = () => {
  

  return (
    <>
      <Sentry.ErrorBoundary fallback={"Something went wrong!"}>
        <Header />
          <Sidebar />
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/stocks" element={<Stocks />}/>
              <Route path="/transactions" element={<Transaction />}/>
            </Routes>
          </div>
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;

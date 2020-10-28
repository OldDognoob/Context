import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpence } from "./Components/IncomeExpence";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence/>
      </div>
    </div>
  );
}

export default App;

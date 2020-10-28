import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpence } from "./Components/IncomeExpence";
import {TransactionList} from "./Components/TransactionList";
import {AddTransaction} from "./Components/AddTransaction";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;

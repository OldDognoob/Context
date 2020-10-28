import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;

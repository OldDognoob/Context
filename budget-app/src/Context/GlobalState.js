import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Pasta", amount: -15 },
    { id: 2, text: "OliveOil", amount: 23 },
    { id: 3, text: "BlackJacket", amount: 180 },
    { id: 4, text: "MeatBone", amount: -65 },
  ],
};
//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

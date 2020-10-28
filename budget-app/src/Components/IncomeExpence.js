import React from "react";

export const IncomeExpence = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">
          +€0.00
        </p>
      </div>
      <div>
        <h4>Expence</h4>
        <p id="money-minus" class="money minus">
          -€0.00
        </p>
      </div>
    </div>
  );
};

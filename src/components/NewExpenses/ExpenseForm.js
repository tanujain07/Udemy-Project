import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Day</label>
          <input type="date" min="2016-01-01" max="2021-06-30" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

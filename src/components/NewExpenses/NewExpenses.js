import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
  };
  props.addExpenses();

  return (
    <div>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
};

export default NewExpenses;

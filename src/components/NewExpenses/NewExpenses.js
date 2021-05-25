import React,{useState}from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const[isEditing , setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
  props.addExpenses(expenseData);
setIsEditing(false);
  };
  const startEditing =()=>{
    setIsEditing(true);
  };

    const stopEditing = ()=>{
      setIsEditing(false);
    };

  return (
    <div>
      <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditing}>Add New Expenses </button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
         onCancel={stopEditing}
        />
        )}
      </div>
    </div>
  );
};

export default NewExpenses;

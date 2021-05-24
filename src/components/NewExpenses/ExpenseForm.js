import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //METHOD WHEN WE USE ONLY ONE STATE
  //   const [inputUser, setInputUser] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDay: '',
  //   });

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setInputUser({
    //   ...inputUser,
    //   enteredTitle: event.target.value,
    // });
    // setInputUser((prevState)=>{
    //     return {...prevState , enteredTitle: event.target.value}
    // });
  };

  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    //     setInputUser({
    //       ...inputUser,
    //       enteredAmount: event.target.value,
    //     });
  };

  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
    //     setInputUser({
    //       ...inputUser,
    //       enteredDay: event.target.value,
    //     });
};

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
     
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  value={enteredTitle} onChange={enteredTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Day</label>
          <input
            type="date"
            min="2016-01-01"
            max="2021-06-30"
            value={enteredDate}
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

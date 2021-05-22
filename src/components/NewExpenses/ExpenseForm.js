import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDay, setEnteredDay] = useState("");



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

  const enteredDayHandler = (event) => {
    setEnteredDay(event.target.value);
//     setInputUser({
//       ...inputUser,
//       enteredDay: event.target.value,
//     });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={enteredTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={enteredAmountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Day</label>
          <input
            type="date"
            min="2016-01-01"
            max="2021-06-30"
            onChange={enteredDayHandler}
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

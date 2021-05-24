import React, { useState } from "react";
// import ExpenseItem from "./components/ExpenseItem";
// import Card from "";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Shopping",
    amount: 359.34,
    date: new Date(2020, 1, 19),
  },
  {
    id: 2,
    title: "Electricity Bills",
    amount: 359.34,
    date: new Date(2019, 8, 29),
  },
  {
    id: 3,
    title: "College Fees",
    amount: 230.0,
    date: new Date(2021, 3, 12),
  },
  {
    id: 4,
    title: "Groccery",
    amount: 789.54,
    date: new Date(2016, 4, 15),
  },
  {
    id: 5,
    title: "Car Loan",
    amount: 3500.34,
    date: new Date(2018, 12, 3),
  },
  // {
  //   id: 6,
  //   title: "Home Rent",
  //   amount: 110.3,
  //   date: new Date(2020, 7, 23),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return ([expense, ...prevExpenses]);
    });
  };
  return (
    <div>
      {/* <h2>Hey! Im learnig ReactJs.</h2> */}
      <NewExpenses addExpenses={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

  // const addExpenseDataHandler= (expenses)=>{
  //   console.log('In App.js');
  //   console.log(expenses);
  // };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},'Hey! Im learnig ReactJs.'),
  //   React.createElement(Expenses ,{items: expenses}));



export default App;

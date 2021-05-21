import React from 'react';
// import ExpenseItem from "./components/ExpenseItem";
// import Card from "./component/Card";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Shopping",
      amount: 359.34,
      date: new Date(2020, 1, 19),
    },
    {
      id: 2,
      title: "Other Expenses",
      amount: 359.34,
      date: new Date(2019, 8, 29),
    },
    {
      id: 3,
      title: "College Fees",
      amount: 230.0,
      date:new Date(2021, 3, 12),
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
    {
      id: 5,
      title: "Home Rent",
      amount: 110.3,
      date: new Date(2020, 7, 23),
    },
  ];
return React.createElement(
  'div',
  {}, 
  React.createElement('h2',{},'Hey! Im learnig ReactJs.'),
  React.createElement(Expenses ,{items: expenses}));





// return(
  //   <div>
  //     <h2>Hey! Im learnig ReactJs.</h2>
  //     <Expenses items={expenses}/>
  //   </div>
  // );
}

export default App;

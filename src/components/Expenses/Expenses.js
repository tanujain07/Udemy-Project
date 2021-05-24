import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // console.log("at expenses",props);
  const [expenseFilter, setExpenseFilter] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    setExpenseFilter(selectedYear);
  };
  // const filtercustomexpense = props.items.filter(exp=>exp.date)
  // console.log("filetercusotm",filtercustomexpense);
 
  const filteredExpenses = props.items.filter((expense) => {
    
    return expense.date.getFullYear().toString() === expenseFilter;
  });
  // console.log("filteredExpenses",filteredExpenses);
let expensesContent = <p>No Expenses Found.</p>;

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}





  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseFilter}
          onChangeFilter={filterChangeHandler}
        />
        {/* {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            ))} */}
        {expensesContent}
        {/* {expenseFilter.length === 0 && <p>No Expenses Found.</p>}
        {expenseFilter.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      /> */}
      </Card>
    </>
  );
};

export default Expenses;

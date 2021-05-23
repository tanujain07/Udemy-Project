// import React, {useState} from 'react';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props)=> {
//  const [title, setTitle] = useState(props.title);
//  const setHandler =()=>{

//  setTitle('Updated!!');
//  }
    return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <div className="expense-item__description">
      {/* <h2>{title}</h2> */}
      <h2>{props.title}</h2>
      <div class="expense-item__price">${props.amount}</div>
      </div>
       {/* <button onClick={setHandler}>New Title</button>  */}
    </Card>
  );
}
export default ExpenseItem;

import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // function clickHandler(){

  // }

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
  };
  // first parameter will have the current value
  // second will have updated value
  // use state will return this two

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}
export default ExpenseItem;

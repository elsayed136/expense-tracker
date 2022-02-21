import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map(item => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
}

export default Expenses;

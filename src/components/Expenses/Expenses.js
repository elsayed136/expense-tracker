import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map(item => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
}

export default Expenses;

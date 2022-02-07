import "./Expenses.css";

import Card from "../UI/Cards";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("None");

  const newSelectedYear = (newYear) => {
    setSelectedYear(newYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return (
      expense.date.getFullYear().toString().localeCompare(selectedYear) === 0 ||
      selectedYear.localeCompare("None") === 0
    );
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          onNewSelectedYear={newSelectedYear}
          year={selectedYear}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpenseList expenses={filteredExpense} />
      </Card>
    </li>
  );
}

export default Expenses;

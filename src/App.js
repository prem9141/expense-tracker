import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Covid Vaccine",
    amount: 100,
    date: new Date(2022, 0, 21),
  },
  {
    id: "e2",
    title: "Antibody Test",
    amount: 60,
    date: new Date(2022, 1, 11),
  },
  {
    id: "e3",
    title: "Resume Review",
    amount: 150,
    date: new Date(2022, 2, 28),
  },
];
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const newExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpense) => {
      return [newExpenseData, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

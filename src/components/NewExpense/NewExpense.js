import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const addNewExpenseListener = () => {
    setAddNewExpense(true);
  };

  const formSubmissionHandler = (formExpenseData) => {
    const newExpenseData = { id: Math.random().toString(), ...formExpenseData };
    props.onNewExpense(newExpenseData);
    setAddNewExpense(false);
  };

  const formResetHandler = () => {
    setAddNewExpense(false);
  };

  if (addNewExpense) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onFormSubmission={formSubmissionHandler}
          onFormReset={formResetHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseListener}>Add New Expense</button>
      </div>
    );
  }
}

export default NewExpense;

import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeListener = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangeListener = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangeListener = (event) => {
    setNewDate(event.target.value);
  };

  const formSubmitListener = (event) => {
    event.preventDefault();
    const newExpense = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    props.onFormSubmission(newExpense);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  const formResetListener = () => {
    props.onFormReset();
  };

  return (
    <form onSubmit={formSubmitListener} onReset={formResetListener}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeListener} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={newAmount}
            onChange={amountChangeListener}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={dateChangeListener}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

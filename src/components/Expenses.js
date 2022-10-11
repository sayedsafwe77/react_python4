import { useState } from "react";
import ExpensesData from "./ExpensesData";
import ExpensesForm from "./ExpensesFrom";
function Expenses() {
  const [expenses, setExpenses] = useState([]);
  function addExpenses(expense) {
    setExpenses((prevState) => {
      prevState.push(expense);
      return prevState;
    });
  }
  return (
    <div>
      <div className="row">
        <ExpensesForm
          onAddExpenses={(expense) => {
            addExpenses(expense);
          }}
          expensesForm={expenses}
        />
        <ExpensesData allexpenses={expenses} />
      </div>
    </div>
  );
}

export default Expenses;

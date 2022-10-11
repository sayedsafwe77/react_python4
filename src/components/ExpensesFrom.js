import { useState } from "react";
function ExpensesForm(props) {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    date: "",
  });
  function FormDataHandler(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function formHandler(e) {
    e.preventDefault();
    props.onAddExpenses(formData);
  }
  return (
    <form onSubmit={formHandler} className="col-4 p-2 m-1 bg-dark text-light">
      <label className="form-label" htmlFor="description">
        description
      </label>
      <input
        className="form-control"
        type="text"
        onChange={FormDataHandler}
        name="description"
      />
      <label className="form-label" htmlFor="price">
        price
      </label>
      <input
        className="form-control"
        type="number"
        onChange={FormDataHandler}
        name="price"
      />
      <label className="form-label" htmlFor="date">
        date
      </label>
      <input
        className="form-control"
        type="date"
        onChange={FormDataHandler}
        name="date"
      />
      <input type="submit" className="form-actions" />
    </form>
  );
}

export default ExpensesForm;

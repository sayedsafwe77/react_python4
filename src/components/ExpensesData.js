function ExpensesData(props) {
  return (
    <div className="col-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">description</th>
            <th scope="col">price</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
          {props.allexpenses.map((expense) => (
            <tr key={expense.description}>
              <td>{expense.description}</td>
              <td>{expense.price}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesData;

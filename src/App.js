import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Button from "./components/Button";
// import Image from "./components/Image";
import Card from "./components/Card";
import Expenses from "./components/Expenses";
// component
function App() {
  return (
    <div>
      <Expenses />
      {/* <Button title="add to card button" />
      <Button title="purchase now" />
      <Button title="show more" /> */}
    </div>
  );
}
export default App;

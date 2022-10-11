// hooks
import { useState, useEffect, useRef } from "react";

// function component
// props
// state
// events
// life cycle
function Card(props) {
  const [name, setName] = useState("mohamed");
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({
    name: "fatma",
    email: "fatma@gmail.com",
  });
  let lname = useRef();
  // useEffect usage
  // to run for every render
  // to run for initial render
  // to run with spacific states
  useEffect(() => {
    // console.log("useEffect");
  });
  useEffect(() => {
    var id = setTimeout(() => {
      console.log("welcome from timeout function");
    }, 1000);
    return () => {
      clearTimeout(id);
      console.log("cleaner");
    };
  }, [count]);
  //   function changeNameHandler(e) {
  //     setName(e.target.value);
  //   }
  function changeUserHandler(e) {
    setUser((prev) => ({
      name: e.target.value,
      age: prev.age,
    }));
  }
  function changeCountHandler(e) {
    setCount((count) => ++count);

    console.log(lname.current.value);
  }

  return (
    <div>
      {/* <p>number of counts is {props.count}</p> */}
      {/* <p>my title is {props.title}</p> */}
      <p>my name is {user.name}</p>
      <input type="text" placeholder="lname" ref={lname} />
      <input type="text" placeholder="user name" onChange={changeUserHandler} />
      <button onClick={changeCountHandler}>count {count}</button>
    </div>
  );
}

export default Card;

import React from "react";

// class component
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // component
    // how to make and use component
    // how to pass value to component (props)
    // component state
    // events in react
    // conditions
    // loops
    // lifecycle
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState((prevState) => ({
      count: ++prevState.count,
    }));
  }
  componentDidMount() {}
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>click me</button>
      </div>
    );
  }
}
export default Button;

// select button
// add event on button
// when event occured it will call a function this function will increament variable
// select paragraph
// paragraph.textContent = count

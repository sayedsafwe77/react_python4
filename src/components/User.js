import React from "react";
import Button from "./Button";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      renderBtn: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:9000/user")
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          users: data,
        }));
      });
  }
  toggleHandler() {
    this.setState((prevState) => ({
      renderBtn: !prevState.renderBtn,
    }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        {this.state.renderBtn && <Button />}
        <button onClick={this.toggleHandler}>toggle btn</button>
      </div>
    );
  }
}

export default User;

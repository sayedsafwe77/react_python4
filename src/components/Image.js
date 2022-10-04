import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRender: true,
    };
    this.isRenderHandler = this.isRenderHandler.bind(this);
    this.logoimage = <img src={process.env.PUBLIC_URL + "/logo512.png"} />;
  }
  isRenderHandler() {
    this.setState((prevState) => ({
      isRender: !prevState.isRender,
    }));
  }
  render() {
    return (
      <div>
        {this.state.isRender && this.logoimage}
        <button onClick={this.isRenderHandler}>toggle image</button>
      </div>
    );
  }
}
export default Image;

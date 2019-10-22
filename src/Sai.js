import React from "react";
import "./App.css";

class Sai extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>{this.props.blessing}</h1>
        <h1>{this.props.greeting}</h1>
        <button onClick={this.props.greeter}>Press Me</button>
      </div>
    );
  }
}

export default Sai;

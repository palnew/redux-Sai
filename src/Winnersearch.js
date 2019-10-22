import React from "react";
import ReactDOM from "react-dom";
//import axios from "axios";
import Winners from "./Winner";

class Mongocon extends React.Component {
  constructor(props) {
    super(props);
    this.getWinners = this.getWinners.bind(this);
    this.state = {
      winners: []
    };
  }

  getWinners() {
    let pattern = ReactDOM.findDOMNode(this.refs.myInput).value;
    this.props.getWinners(pattern);
    console.log("pattern is" + pattern);
  }

  render() {
    let code = this.props.winners.map(x => (
      <Winners key={x.id} winner={x}></Winners>
    ));
    return (
      <div>
        Enter Scientist
        <input onKeyUp={this.getWinners} ref="myInput" />
        {code}
      </div>
    );
  }
}
export default Mongocon;

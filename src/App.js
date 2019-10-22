import React from "react";

import "./App.css";
//import Sai from "./Sai";
import { Sai } from "./Redux/mappers/mapper";
import { Sai3 } from "./Redux/mappers/mapper";

class App extends React.Component {
  render() {
    return (
      <div id="box">
        <Sai></Sai>
        <Sai3></Sai3>
      </div>
    );
  }
}

export default App;

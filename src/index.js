import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { state } from "./Redux/mappers/mapper";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const appstate = createStore(state, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={appstate}>
    <App />
  </Provider>,
  document.getElementById("root")
);

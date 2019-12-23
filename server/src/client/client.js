import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./Routes";

const store = createStore(reducer, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.querySelector("#root")
);

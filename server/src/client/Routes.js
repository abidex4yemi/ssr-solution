import React from "react";
import Home from "./components/home";
import UsersList from "./components/UsersList";
import { Route } from "react-router-dom";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersList} />
    </div>
  );
};

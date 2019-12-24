import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

export default [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    loadData,
    exact: true,
    path: "/users",
    component: UsersListPage
  }
];

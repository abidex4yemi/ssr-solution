import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    exact: true,
    path: "/",
    ...HomePage
  },
  {
    exact: true,
    path: "/users",
    ...UsersListPage
  }
];

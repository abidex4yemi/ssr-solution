import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
  {
    ...App,
    routes: [
      {
        exact: true,
        path: "/",
        ...HomePage
      },
      {
        exact: true,
        path: "/users",
        ...UsersListPage
      },
      {
        exact: true,
        path: "/admins",
        ...AdminsListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

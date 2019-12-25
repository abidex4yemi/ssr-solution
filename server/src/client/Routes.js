import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

// Note: we can no more uses our default
// React routing set up since we want to
// cater for server side rendering
// That's why we export array of routes and it's component

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

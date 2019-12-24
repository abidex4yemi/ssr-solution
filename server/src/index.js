import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import routes from "./client/routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("https://server-side-rendering-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.header["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  // return array of component to be rendered
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    return res.status(200).send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

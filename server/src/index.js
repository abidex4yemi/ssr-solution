import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import routes from "./client/routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);
  // return array of component to be rendered
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) {
      res.status(404);
    }

    return res.send(content);
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

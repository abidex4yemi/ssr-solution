import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import routes from "./client/routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// fool the browser such that when making request from
// the server it looks like it's from the browser
// user proxy
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
  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      // keep our ui from crashing if user not logged in
      // and react has yet no hydrate
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    // Redirect to root / if user not logged in
    // we need to use context because on the server
    // react-router-dom works differently
    if (context.url) {
      return res.redirect(301, context.url);
    }

    // Handle page not found
    if (context.notFound) {
      res.status(404);
    }

    return res.send(content);
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

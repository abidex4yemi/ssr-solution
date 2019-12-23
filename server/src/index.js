import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  return res.status(200).send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

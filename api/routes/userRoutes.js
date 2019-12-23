const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get("/users", (req, res) => {
    return res.status(200).send(users);
  });

  app.get("/users/xss", (req, res) => {
    return res.status(200).send(usersXss);
  });

  app.get("/admins", requireLogin, (req, res) => {
    return res.status(200).send(admins);
  });
};

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Seun Kuti" },
  { id: 3, name: "Bolaji Matti" },
  { id: 4, name: "Yemi Abidemi" },
  { id: 5, name: "Elvis Jane" }
];

const usersXss = [
  { id: 1, name: "</script><script>alert(1234567890)</script>" },
  { id: 2, name: "John Michael" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" },
  { id: 5, name: "Chelsey Dietrich" }
];

const admins = [
  { id: 1, name: "Bolaji Matti" },
  { id: 2, name: "Sulaiman Abidemi" },
  { id: 3, name: "Gelann Reichert" },
  { id: 4, name: "Moriah Stanton" },
  { id: 5, name: "Rey Padberg" }
];

const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      return res.redirect("/");
    }
  );

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      return res.redirect("/");
    }
  );

  app.get("/logout", (req, res) => {
    req.logout();
    return res.redirect("/");
  });

  app.get("/current_user", (req, res) => {
    return res.send(req.user);
  });
};

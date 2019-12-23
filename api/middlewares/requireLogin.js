module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: "You have to log in" });
  }

  next();
};

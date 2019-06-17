const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if the is no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  //   Verify token
  try {
    // Decodes token using jwt secret
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Inserts into req.user the id decoded by the token
    // Every authenticated route will have the user id in it.
    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid." });
  }
};

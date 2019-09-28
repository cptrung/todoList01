const jwt = require("jsonwebtoken");

module.exports.middlewareCheckListTask = (req, res, next) => {
  var token = req.headers.access_token;
  if (token) {
    jwt.verify(token, process.env.JWT_SCREET, (err, decoded) => {
      if (err) {
        return res.json({ token: false, message: "invalid token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      token: false,
      message: "No token provided."
    });
  }
};

var jwt = require("jsonwebtoken");

const authUser = require("./../../models/auth.user.model");

module.exports.sigIn = async (req, res, next) => {
  const { username, password } = req.body;
  const newAuthUser = new authUser({
    username,
    password
  });

  const User = await authUser.findOne({ username });

  if (User && User.password === password) {
    const payload = {
      check: true,
      sub: User.username
    };
    var token = jwt.sign(payload, process.env.JWT_SCREET, {
      expiresIn: 1440
    });
    res.cookie("access_token", token);
    return res.json({ message: "authentication done ", access_token: token });
  } else {
    return res.json({ error: "error: account not exssit" });
  }
};

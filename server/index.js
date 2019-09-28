require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const taskRoute = require("./api/routes/task.route");
const authRoute = require("./api/routes/auth.route");

var cors = require("cors");
cors = require("cors");

const test = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const app = express();
const port = 4000;
app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser(process.env.SESSION_SCREET));

app.get("/", (req, res, next) => {
  res.send('test');
});

app.use("/task", taskRoute);
app.use("/users", authRoute);

app.listen(port, () => {
  console.log("running port", port);
});

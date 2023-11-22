const express = require("express");

const app = express();

function authenticate(req, res, next) {
  const authheader = req.headers.authorization;

  if (!authheader) {
    const err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }

  const auth = new Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");

  const [username, password] = auth;
  if (username === "admin" && password === "password") {
    console.log("You are authenticated!");
    return next();
  } else {
    const err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
}

app.use(authenticate);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

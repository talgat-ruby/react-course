import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import model from "./model.js";

import meHandler from "./handlers/me.js";
import signinHandler from "./handlers/signin.js";
import signupHanlder from "./handlers/signup.js";
import signoutHanlder from "./handlers/signout.js";

dotenv.config();
model.init();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.locals.model = model;
const port = process.env.PORT;

app.get("/api/me", meHandler);

app.post("/api/signin", signinHandler);

app.post("/api/signup", signupHanlder);

app.post("/api/signout", signoutHanlder);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

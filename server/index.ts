import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import "dotenv/config";
import crypto from "crypto";

import saveStack from "./routes/saveStack";
import saveCardToStack from "./routes/saveCardToStack";
import getStacks from "./routes/getStacks";
import getStack from "./routes/getStack";
import deleteStack from "./routes/deleteStack";
import deleteCardFromStack from "./routes/deleteCardFromStack";
import register from "./routes/userRegister";
import login from "./routes/userSignIn";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
//Middleware
app.use(express.json());

//Routes
app.use("/stacks", saveStack);
app.use("/stacks/", saveCardToStack);
app.use("/stacks", getStacks);
app.use("/stacks/", getStack);
app.use("/stacks/", deleteStack);
app.use("/stacks/", deleteCardFromStack);
app.use("/register", register);
app.use("/login", login);

mongoose
  .connect(process.env.MONGO_URL || "")
  .then(() => {
    console.log("Connected successfully to database");
    //Connect to db then start server if promise is delivered
    app.listen(process.env.APP_PORT);
    console.log(`App running on port: ${process.env.APP_PORT}`);
  })
  .catch((err) => {
    console.log("Could not connect to database, server is not starting", err);
  });

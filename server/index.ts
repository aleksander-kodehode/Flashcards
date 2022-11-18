import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import saveStack from "./routes/post/saveStack";
import getStacks from "./routes/get/getStack";
import deleteStack from "./routes/delete/deleteStack";

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
app.use("/stacks", getStacks);
app.use("/stacks/", deleteStack);

mongoose.connect(process.env.MONGO_URL || "").then(() => {
  //Check connection
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Connected successfully to database");
  });

  //Connect to db then start server if promise is delivered
  console.log(`App running on port: ${process.env.APP_PORT}`);
  app.listen(process.env.APP_PORT);
});

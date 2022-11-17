import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Card from "./models/cards";
dotenv.config();
import saveCard from "./routes/post/saveCard";
import getCards from "./routes/get/getCards";
import deleteCard from "./routes/delete/deleteCard";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
//Middleware
app.use(express.json());

//Routes
app.use("/cards", saveCard);
app.use("/cards", getCards);
app.use("/cards/", deleteCard);

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

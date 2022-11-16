import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Card from "./models/cards";

const app = express();

//Middleware
app.use(express.json());

/* app.use("/", function (req: Request, res: Response) {
  res.send("Hello this is front end");
}); */

app.post("/cards", async (req: Request, res: Response) => {
  const newCard = new Card({
    title: req.body.title,
  });
  const createdCard = await newCard.save();
  res.json(createdCard);
  console.log("Card saved to db");
});
app.get("/cards", async (req: Request, res: Response) => {
  const cards = await Card.find();
  res.json(cards);
});

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

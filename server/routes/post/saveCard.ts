import express, { Request, Response } from "express";
import Card from "../../models/cards";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const newCard = new Card({
    title: req.body.title,
  });
  try {
    const createdCard = await newCard.save();
    res.json(createdCard);
    console.log(`Card: ${createdCard.title} saved to db`);
  } catch {
    res.status(400);
    res.json({ error: "Please add text to the input field" });
  }
  res.status(201);
});

export default router;

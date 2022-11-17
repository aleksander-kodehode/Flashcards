import express, { Request, Response } from "express";
import Card from "../../models/cards";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const cards = await Card.find();
  res.json(cards);
});

export default router;

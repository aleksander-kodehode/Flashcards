import express, { Request, Response } from "express";
import Card from "../../models/cards";
const router = express.Router();

router.delete("/:deckId", async (req: Request, res: Response) => {
  const cardId = req.params.deckId;
  const card = await Card.findByIdAndDelete(cardId);
  res.json({
    message: `Successfully delete entry: ${card?._id}, which said: ${card?.title}`,
  });
  console.log(`Card: ${card?._id} deleted from db`);
});

export default router;

import express, { Request, Response } from "express";
import Stack from "../models/stacksModel";
const router = express.Router();

router.delete(
  "/:stackId/cards/:cardIndex",
  async (req: Request, res: Response) => {
    const stackId = req.params.stackId;
    const cardIndex = req.params.cardIndex;
    const stack = await Stack.findById(stackId);
    if (!stack) return res.status(400).send("No stack with this id");
    stack.cards.splice(parseInt(cardIndex), 1);
    await stack.save();
    res.json(stack);
  }
);

export default router;

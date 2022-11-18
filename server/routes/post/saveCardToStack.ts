import express, { Request, Response } from "express";
import Stack from "../../models/stacks";
const router = express.Router();

router.post("/:stackId/cards", async (req: Request, res: Response) => {
  const stackId = req.params.stackId;
  const stack = await Stack.findById(stackId);
  if (!stack) return res.status(400).send("Could not find stack with this ID");
  const { text } = req.body;
  stack.cards.push(text);
  await stack.save();
  res.json(stack);
});

export default router;

import express, { Request, Response } from "express";
import Stack from "../../models/stacks";
const router = express.Router();

router.post("/:stackId/cards", async (req: Request, res: Response) => {
  const stackId = req.params.stackId;
  const stack = await Stack.findById(stackId);
  if (!stack) return res.status(400).send("Could not find stack with this ID");
  const question = req.body.question;
  const answer = req.body.answer;
  stack.cards.push({ question: question, answer: answer });
  await stack.save();
  res.json(stack);
});

export default router;

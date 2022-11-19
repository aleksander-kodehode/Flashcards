import express, { Request, Response } from "express";
import Stack from "../models/stacksModel";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const newStack = new Stack({
    title: req.body.title,
  });
  try {
    const createdStack = await newStack.save();
    res.json(createdStack);
    console.log(`Stack: ${createdStack.title} saved to db`);
  } catch {
    res.status(400);
    res.json({ error: "Server error" });
  }
  res.status(201);
});

export default router;

import express, { Request, Response } from "express";
import Stack from "../../models/stacks";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const stacks = await Stack.find();
  res.json(stacks);
});

export default router;

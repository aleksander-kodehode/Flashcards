import express, { Request, Response } from "express";
import Stack from "../models/stacksModel";
const router = express.Router();

router.get("/:stackId", async (req: Request, res: Response) => {
  const stackId = req.params.stackId;
  const stack = await Stack.findById(stackId);
  res.json(stack);
});

export default router;

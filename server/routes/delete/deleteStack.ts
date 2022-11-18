import express, { Request, Response } from "express";
import Stack from "../../models/stacks";
const router = express.Router();

router.delete("/:stackId", async (req: Request, res: Response) => {
  const stackId = req.params.stackId;
  const stack = await Stack.findByIdAndDelete(stackId);
  if (!stack) return res.status(400).send("No stack with this id");
  res.json({
    message: `Successfully delete entry: ${stack?._id}, which said: ${stack?.title}`,
  });
  console.log(`Stack: ${stack?._id} deleted from db`);
});

export default router;

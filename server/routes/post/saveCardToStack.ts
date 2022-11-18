import express, { Request, Response } from "express";
import Card from "../../models/stacks";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  //TODO: Get request stack id and save it
  //TODO: Find stack in db with id and save it (await this)
  //TODO: error handle if there is no stack (!stack)
  //TODO: save body from request
  //TODO: push it to a card to nested stack? ( const {text} = req.body)
  //TODO: save stack and wait for it to finish
  //TODO: res.json(stack)
});

export default router;

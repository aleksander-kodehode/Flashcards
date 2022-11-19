import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    // Extract email and password from the req.body object
    const { username, password } = req.body;

    // Check if user exists in database
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Compare passwords
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        return res.status(200).json({ message: "User Logged in Successfully" });
      }
      console.log(err);
      return res.status(401).json({ message: "Invalid Credentials" });
    });
  } catch (err: any) {
    res.status(401).send(err.message);
  }
});

export default router;

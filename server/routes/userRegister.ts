import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { models } from "mongoose";
import User from "../models/userModel";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    // Extract email and password from the req.body object
    const { username, email, password } = req.body;

    // Check if the email is already in use
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(401).json({ message: "Email is already in use" });
      console.log("Email is already in use");
      return;
    }
    // Check if the username is already in use
    const userExists = await User.findOne({ username });
    if (userExists) {
      res.status(401).json({ message: "Username is already in use" });
      console.log("Username is already in use");
      return;
    }

    // Define salt rounds
    const saltRounds = 10;

    // Hash password
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw new Error("Internal Server Error");

      // Create a new user
      const user = new User({
        username,
        email,
        password: hash,
      });

      // Save user to database
      user.save().then(() => {
        res.json({ message: "User created successfully", user });
      });
    });
  } catch (err: any) {
    return res.status(401).send(err.message);
  }
});

export default router;

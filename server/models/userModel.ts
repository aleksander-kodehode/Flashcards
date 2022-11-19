import { randomUUID } from "crypto";
import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      validate: {
        validator: function (value: string) {
          return value.length >= 5;
        },
        message: () => "Username must be at least five characters long",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: isEmail,
        message: (props: any) => `${props.value} is not a valid email`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (value: string) {
          return value.length >= 6;
        },
        message: () => "Password must be at least six characters long",
      },
    },
    uuid: {
      type: String,
      default: randomUUID,
    },
  },
  { collection: "Users" }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;

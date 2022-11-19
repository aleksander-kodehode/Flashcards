import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

const StackSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cards: [cardSchema],
  },
  { collection: "Stacks" }
);

const StackModel = mongoose.model("Stack", StackSchema);

export default StackModel;

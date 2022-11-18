import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const StackSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: [String],
    },
    answer: {
      type: String,
    },
  },
  { collection: "Stacks" }
);

const StackModel = mongoose.model("Stack", StackSchema);

export default StackModel;

import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
  },
  { collection: "cards" }
);

const CardModel = mongoose.model("Card", CardSchema);

export default CardModel;

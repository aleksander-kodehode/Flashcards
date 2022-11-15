import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { collection: "cards" }
);

const CardModel = mongoose.model("Card", CardSchema);

export default CardModel;

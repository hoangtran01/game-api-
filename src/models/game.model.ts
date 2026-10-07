import mongoose, { Document, Schema } from "mongoose";

export interface IGame extends Document {
  title: string;
  genre: string;
  platforms: string[];
  releaseYear: number;
  rating: number;
  price: number;
  isMultiplayer: boolean;
}

const gameSchema = new Schema<IGame>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    genre: {
      type: String,
      required: true,
      trim: true,
    },

    platforms: {
      type: [String],
      required: true,
    },

    releaseYear: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    isMultiplayer: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;
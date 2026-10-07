import createError from "http-errors";
import Game, { IGame } from "../models/game.model.js";

export const getAllGames = async () => {
  const games = await Game.find();

  return games;
};

export const getGameById = async (id: string) => {
  const game = await Game.findById(id);

  if (!game) {
    throw createError(404, "Không tìm thấy game với ID tương ứng");
  }

  return game;
};

export const createGame = async (gameData: Partial<IGame>) => {
  const game = await Game.create(gameData);

  return game;
};

export const updateGame = async (
  id: string,
  gameData: Partial<IGame>
) => {
  const game = await Game.findByIdAndUpdate(
    id,
    gameData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!game) {
    throw createError(404, "Không tìm thấy game với ID tương ứng");
  }

  return game;
};

export const deleteGame = async (id: string) => {
  const game = await Game.findByIdAndDelete(id);

  if (!game) {
    throw createError(404, "Không tìm thấy game với ID tương ứng");
  }

  return game;
};
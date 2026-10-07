import { NextFunction, Request, Response } from "express";

import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from "../services/game.service.js";

// Khai báo kiểu dữ liệu cho route có :id
type GameParams = {
  id: string;
};

export const getGamesController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const games = await getAllGames();

    res.status(200).json({
      success: true,
      message: "Lấy danh sách game thành công",
      data: games,
    });
  } catch (error) {
    next(error);
  }
};

export const getGameByIdController = async (
  req: Request<GameParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const game = await getGameById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Lấy chi tiết game thành công",
      data: game,
    });
  } catch (error) {
    next(error);
  }
};

export const createGameController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const game = await createGame(req.body);

    res.status(201).json({
      success: true,
      message: "Thêm game mới thành công",
      data: game,
    });
  } catch (error) {
    next(error);
  }
};

export const updateGameController = async (
  req: Request<GameParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const game = await updateGame(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Cập nhật thông tin game thành công",
      data: game,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteGameController = async (
  req: Request<GameParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const game = await deleteGame(req.params.id);

    res.status(200).json({
      success: true,
      message: "Xóa game thành công",
      data: {
        _id: game._id,
      },
    });
  } catch (error) {
    next(error);
  }
};
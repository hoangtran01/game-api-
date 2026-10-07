import { Router } from "express";

import {
  getGamesController,
  getGameByIdController,
  createGameController,
  updateGameController,
  deleteGameController,
} from "../controllers/game.controller.js";

import { validate } from "../middlewares/validate.middleware.js";

import {
  createGameSchema,
  updateGameSchema,
  gameIdSchema,
} from "../validations/game.validation.js";

const router = Router();

router.get("/", getGamesController);

router.get(
  "/:id",
  validate(gameIdSchema),
  getGameByIdController
);

router.post(
  "/",
  validate(createGameSchema),
  createGameController
);

router.put(
  "/:id",
  validate(gameIdSchema),
  validate(updateGameSchema),
  updateGameController
);

router.delete(
  "/:id",
  validate(gameIdSchema),
  deleteGameController
);

export default router;
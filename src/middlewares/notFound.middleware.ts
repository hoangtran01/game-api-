import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next(
    createError(
      404,
      `Không tìm thấy route ${req.method} ${req.originalUrl}`
    )
  );
};
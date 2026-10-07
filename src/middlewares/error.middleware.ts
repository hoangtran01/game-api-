import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export const errorMiddleware = (
  err: HttpError & { errors?: unknown },
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(err.errors ? { errors: err.errors } : {}),
  });
};
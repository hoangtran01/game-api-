import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";
import createError from "http-errors";

export const validate =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path[issue.path.length - 1]?.toString() ?? "unknown",
        message: issue.message,
      }));

      const error = createError(400, "Dữ liệu không hợp lệ");

      (error as any).errors = errors;

      return next(error);
    }

    next();
  };
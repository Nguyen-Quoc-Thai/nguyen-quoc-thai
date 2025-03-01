import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle known errors (AppError instances)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // Handle unknown errors
  console.error("ERROR 💥:", err);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
};

import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { AppError } from "../utils";

type ValidationSource = "body" | "query" | "params";

export const validateRequest =
  (schema: Joi.Schema, source: ValidationSource = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[source], { abortEarly: false });

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return next(new AppError(errorMessage, 400));
    }

    next();
  };
  
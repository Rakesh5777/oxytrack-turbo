import { operations } from "@oxytrack/api-contract/dist/api";
import { z } from "@oxytrack/api-contract/zodSchema";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Responses, TypedRequest, TypedResponse } from "../types/express";

type StatusCodes = 200 | 400 | 401 | 403 | 404 | 408 | 409 | 500;

export class CustomError extends Error {
  statusCode: StatusCodes;
  error: unknown;
  constructor(message: string, statusCode: StatusCodes, name?: string, error?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.name = name || "CustomError";
    this.error = error;
  }
}

type OperationKey = keyof operations;

type AsyncWrapperType<T extends OperationKey> = (
  fn: (req: TypedRequest[T], res: TypedResponse<Responses[T]>, next: NextFunction) => Promise<any>,
) => (req: TypedRequest[T], res: TypedResponse<Responses[T]>, next: NextFunction) => Promise<any>;

export const asyncWrapper = <T extends OperationKey>(key: T): AsyncWrapperType<T> => {
  return function (fn: (req: TypedRequest[T], res: TypedResponse<Responses[T]>, next: NextFunction) => Promise<any>) {
    return function (req: TypedRequest[T], res: TypedResponse<Responses[T]>, next: NextFunction) {
      return fn(req, res, next).catch(next);
    };
  };
};

export const validateReq = (schema: z.Schema) => (req: any, res: any, next: () => void) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error: any) {
    throw new CustomError("Invalid request body", 400, "zodValidationErr", error.errors);
  }
};

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req?.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Invalid token type/ no token" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { id, username, role } = jwt.verify(token!, process.env.JWT_SECRET!) as { id: number; username: string; role: string };

    req.id = id;
    req.username = username;
    req.role = role;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token", error: error });
  }
};

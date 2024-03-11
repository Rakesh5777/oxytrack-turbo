import { Express } from "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    id: string;
    username: string;
    role: string;
  }
}

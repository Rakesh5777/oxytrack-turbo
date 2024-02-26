import { PrismaClient } from "@oxytrack/database";
import { Express } from "express-serve-static-core";

declare module 'express-serve-static-core' {
    interface Request {
        id: number;
        username: string;
        role: string;
    }
}

import express, { NextFunction, Request, Response } from "express";
import rootRouter from "./routes/routes";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import yamljs from "yamljs";
import { specYamlPath } from "@oxytrack/api-contract/specYamlPath";
import { Prisma, PrismaClient } from "@oxytrack/database";
import { CustomError } from "./utils/middlewares";
import {
  getCauseFromError,
  getErrorFieldsFromError,
} from "./utils/commonUtils";

dotenv.config();

const app = express();
const port = 3000;
const apiVersion = "v1";

export const prisma = new PrismaClient();

const swaggerSpec = yamljs.load(specYamlPath);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use(`/api/${apiVersion}`, rootRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  if (err instanceof CustomError) {
    switch (err.name) {
      case "zodValidationErr":
        return res
          .status(err.statusCode)
          .json({ message: "Bad request", error: err.error });
      default:
        return res
          .status(err.statusCode)
          .json({ message: err.message, error: err });
    }
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res
          .status(409)
          .json({
            message: `Duplicate field value entered for ${getErrorFieldsFromError(
              err,
            )}`,
            error: err,
          });
      default:
        return res
          .status(400)
          .json({ message: `${getCauseFromError(err)}`, error: err });
    }
  }
  return res
    .status(500)
    .json({ error: "An error occurred while processing your request" });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
  prisma.$connect().then(() => {
    console.log("Connected to the database");
  });
});

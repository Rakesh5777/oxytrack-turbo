import { PrismaClient } from "@oxytrack/database";
import { specYamlPath } from "@oxytrack/api-contract/specYamlPath";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import yamljs from "yamljs";
import rootRouter from "./routes/routes";
import { errorHandler } from "./utils/error.middleware";
import * as OpenApiValidator from "express-openapi-validator";

dotenv.config();

export const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;
const apiVersion = "v1";

const swaggerSpec = yamljs.load(specYamlPath);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use(
  OpenApiValidator.middleware({
    apiSpec: specYamlPath,
    validateRequests: true,
    validateResponses: true,
  }),
);

app.use(`/api/${apiVersion}`, rootRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
  prisma.$connect().then(() => {
    console.log("Connected to the database");
  });
});

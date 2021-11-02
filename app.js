import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import { DB_URL } from "./config/constants";
import logger from "./utils/logger";

import greeringRouter from "./modules/greeting/routes";
import notesRouter from "./modules/notes/routes";

const app = express();
dotenv.config()
const port = process.env.PORT || "3001";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Libriry API",
      version: "1.0.0",
      description: "A simple documentation about note"
    },
    servers: [
      {
        url: "http://localhost:3001/"
      }
    ], 
  },
  apis: ["./modules/notes/routes/*.js"]
}

const specs = swaggerJSDoc(options)

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("static"));

app.use("/api/greetings", greeringRouter);
app.use("/api/notes", notesRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      logger.info(`server up and running on PORT : ${port}`);
    });
  } catch (e) {
    logger.error(json(e));
  }
};
startApp();

module.exports = app;

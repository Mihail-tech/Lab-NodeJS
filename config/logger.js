import { createLogger, transports, format } from "winston";
import "winston-mongodb";

const { timestamp, combine, printf, json } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${level}: ${message}`;
});

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "./logging/info.log",
      level: "info",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat,
        json()
      ),
    }),
    new transports.File({
      filename: "./logging/info.log",
      level: "error",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat,
        json()
      ),
    }),
  ],
});

export default logger;

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import DB_URL from "./config/constants";
import mongoose from "mongoose";
import logger from "./utils/logger";

import indexRouter from "./modules/notes/routes/greetingRout";
import notesRouter from "./modules/notes/routes/notesRout";


const app = express();
const port = process.env.PORT || "3000";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('static'));

app.use("/api/greetings", indexRouter);
app.use("/api/notes", notesRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      logger.info(`server up and running on PORT : ${port}`);
      console.log(`server up and running on PORT : ${port}`);
    });
  } catch (e) {
    logger.error(json(e));
    console.log(e);
  }
};
startApp();

module.exports = app;


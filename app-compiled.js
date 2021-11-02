"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _constants = require("./config/constants");

var _logger = _interopRequireDefault(require("./utils/logger"));

var _routes = _interopRequireDefault(require("./modules/greeting/routes"));

var _routes2 = _interopRequireDefault(require("./modules/notes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

var port = process.env.PORT || "3001";
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Libriry API",
      version: "1.0.0",
      description: "A simple documentation about note"
    },
    servers: [{
      url: "http://localhost:3001/"
    }]
  },
  apis: ["./modules/notes/routes/*.js"]
};
var specs = (0, _swaggerJsdoc["default"])(options); // view engine setup

app.set("views", _path["default"].join(__dirname, "views"));
app.set("view engine", "jade");
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"]("static"));
app.use("/api/greetings", _routes["default"]);
app.use("/api/notes", _routes2["default"]);
app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));

var startApp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(_constants.DB_URL, {
              useUnifiedTopology: true,
              useNewUrlParser: true
            });

          case 3:
            app.listen(port, function () {
              _logger["default"].info("server up and running on PORT : ".concat(port));
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);

            _logger["default"].error(json(_context.t0));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function startApp() {
    return _ref.apply(this, arguments);
  };
}();

startApp();
module.exports = app;

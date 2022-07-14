//external Lib  imports
const express = require("express");
require("express-async-errors");

const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const app = new express();

dotenv.config({ path: path.join(__dirname, "./.env") });

//internal imports
const connectDB = require("./src/confiq/db");
const { checkLogin } = require("./src/middleware/authVerify");

//imports routes

//security lib imports
const cors = require("cors");
const hpp = require("hpp");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const expressMongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");

//
const userRoutes = require("./src/routes/user/userRoutes");
const taskRoutes = require("./src/routes/task/taskRoutes");

//security middleware emplement
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(expressMongoSanitize());
app.use(xssClean());

//default middleware emplement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Apply the rate limiting middleware to all requests

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10000,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
const DB_OPTIONS = {
  user: process.env.MONGODB_DATABASE_USERNAME,
  pass: process.env.MONGODB_DATABASE_PASSWORD,
  dbName: "task",
  autoIndex: true,
};

//connection database
connectDB(MONGODB_CONNECTION_URL, DB_OPTIONS);
app.use(express.static("client/build"));

// Routing Implement

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/task", taskRoutes);

// Add React Front End Routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// 404 not found handler
// app.use(notFoundErrorHandler);

// Default Error Handler
app.use((err, req, res, next) => {
  const message = err.message ?? "Server Error Occured";
  const status = err.status ?? 500;
  res.status(status).json({ message });
});

module.exports = app;

//const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load env vars
dotenv.config({ path: "./.env" });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} ${process.env.JWT_SECRET} mode on port ${PORT}`
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});

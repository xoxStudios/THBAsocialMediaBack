//const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config({ path: "./.env" });
connectDB();
const auth = require("./routes/auth");

const app = express();

app.use(function(error, req, res, next) {
  res.json({ message: error.message });
});
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", auth);

const PORT = process.env.PORT || 8080;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} ${process.env.JWT_SECRET} mode on port ${PORT}`
  )
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { register, login, getUser } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, getUser);

module.exports = router;

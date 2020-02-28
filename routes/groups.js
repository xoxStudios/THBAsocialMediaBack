const express = require("express");
const router = express.Router();
const { getGroups, setGroup } = require("../controllers/auth");

router.post("/groups", setGroup);
router.get("/groups", getGroups);

module.exports = router;

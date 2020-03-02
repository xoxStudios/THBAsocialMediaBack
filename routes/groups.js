const express = require("express");
const router = express.Router();
const { getGroups, setGroup } = require("../controllers/groups");

router.post("/groups", setGroup);
router.get("/groups", getGroups);

module.exports = router;

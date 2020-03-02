const express = require("express");
const router = express.Router();
const {
  getGroups,
  setGroup,
  setGroupUserRelation
} = require("../controllers/groups");

router.post("/groups", setGroup);
router.get("/groups", getGroups);
router.post("/groups/user/relations", setGroupUserRelation);

module.exports = router;

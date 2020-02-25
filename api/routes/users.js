const { create, getAll } = require("../../controllers/users");
const router = require("express").Router();

router
  .route("/")
  .post(create)
  .get(getAll);

module.exports = router;

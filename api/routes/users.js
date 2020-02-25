const { create, getAll } = require("../../controllers/users");
const router = require("express").Router();

router
  .route("/users")
  .post(create)
  .get(getAll);

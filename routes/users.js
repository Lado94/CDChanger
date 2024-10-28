const express = require("express");
const {
  getUser,
  getAllUsers,
  updateUser,
  delUser,
  createUser,
} = require("../controllers/users");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(delUser);

module.exports = router;

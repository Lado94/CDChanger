const express = require("express");
const {
  getUser,
  getAllUsers,
  updateUser,
  delUser,
  createUser,
} = require("../controllers/users");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", delUser);

module.exports = router;

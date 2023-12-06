const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserBalance,
  updateUserBalance,
  transferBalance,
} = require("../Controllers/user");

router.get("/", getAllUsers);

router.get("/:userId/balance", getUserBalance);

router.put("/:userId/balance", updateUserBalance);

router.post("/transfer", transferBalance);

module.exports = router;

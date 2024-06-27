const express = require("express");
const router = express.Router();
const {
  sendNotification,
  getNotifications,
} = require("../controllers/notificationController");

router.post("/", sendNotification);
router.get("/:userId", getNotifications);

module.exports = router;

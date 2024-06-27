const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  uploadVideo,
  getVideoRecords,
} = require("../controllers/videoRecordController");

// Configuração do multer para upload de vídeo
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("file"), uploadVideo);
router.get("/:appointmentId", getVideoRecords);

module.exports = router;

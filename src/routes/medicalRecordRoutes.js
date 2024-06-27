const express = require("express");
const router = express.Router();
const {
  createMedicalRecord,
  getMedicalRecords,
} = require("../controllers/medicalRecordController");

router.post("/", createMedicalRecord);
router.get("/:patientId", getMedicalRecords);

module.exports = router;

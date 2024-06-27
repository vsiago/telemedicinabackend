const express = require("express");
const router = express.Router();
const {
  createPrescription,
  getPrescriptions,
} = require("../controllers/prescriptionController");

// Rota para criar prescrição
router.post("/", createPrescription);

// Rota para listar prescrições
router.get("/", getPrescriptions);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getAppointments,
} = require("../controllers/appointmentController");

// Rota para criar agendamento
router.post("/", createAppointment);

// Rota para listar agendamentos
router.get("/", getAppointments);

module.exports = router;

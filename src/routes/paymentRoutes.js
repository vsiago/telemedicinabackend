const express = require("express");
const router = express.Router();
const {
  processPayment,
  getPayments,
} = require("../controllers/paymentController");

// Rota para processar pagamento
router.post("/", processPayment);

// Rota para listar pagamentos
router.get("/", getPayments);

module.exports = router;

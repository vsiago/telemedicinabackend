// paymentController.js

const Payment = require("../models/paymentModel"); // Supondo que você tenha um modelo de Pagamento

// Função para processar um pagamento
const processPayment = async (req, res) => {
  try {
    const { userId, amount, paymentMethod, currency } = req.body;

    // Validação de entrada
    if (!userId || !amount || !paymentMethod || !currency) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    // Criação do pagamento
    const newPayment = new Payment({
      userId,
      amount,
      paymentMethod,
      currency,
      date: new Date(),
      status: "processed", // Status inicial, ajuste conforme necessário
    });

    await newPayment.save();

    res.status(201).json({
      message: "Pagamento processado com sucesso",
      payment: newPayment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao processar o pagamento", details: error.message });
  }
};

// Função para obter todos os pagamentos
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();

    res.status(200).json({
      message: "Pagamentos obtidos com sucesso",
      payments,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao obter os pagamentos", details: error.message });
  }
};

module.exports = {
  processPayment,
  getPayments,
};

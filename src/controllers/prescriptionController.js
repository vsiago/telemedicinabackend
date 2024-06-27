// prescriptionController.js

const Prescription = require("../models/prescriptionModel"); // Supondo que você tenha um modelo de Prescrição

// Função para criar uma prescrição
const createPrescription = async (req, res) => {
  try {
    const { patientId, doctorId, medication, dosage, instructions } = req.body;

    // Verifique se todos os campos obrigatórios estão preenchidos
    if (!patientId || !doctorId || !medication || !dosage || !instructions) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    // Crie uma nova prescrição
    const newPrescription = new Prescription({
      patientId,
      doctorId,
      medication,
      dosage,
      instructions,
      date: new Date(),
    });

    await newPrescription.save();

    res.status(201).json({
      message: "Prescrição criada com sucesso",
      prescription: newPrescription,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao criar a prescrição", details: error.message });
  }
};

// Função para obter todas as prescrições
const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find();

    res.status(200).json({
      message: "Prescrições obtidas com sucesso",
      prescriptions,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao obter as prescrições", details: error.message });
  }
};

module.exports = {
  createPrescription,
  getPrescriptions,
};

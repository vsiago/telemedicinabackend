const MedicalRecord = require("../models/medicalRecordModel");

// Criar registro médico
const createMedicalRecord = async (req, res) => {
  try {
    const record = new MedicalRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar registro médico", error });
  }
};

// Listar registros médicos de um paciente
const getMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find({ patient: req.params.patientId })
      .populate("patient")
      .populate("doctor");
    res.status(200).json(records);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar registros médicos", error });
  }
};

module.exports = { createMedicalRecord, getMedicalRecords };

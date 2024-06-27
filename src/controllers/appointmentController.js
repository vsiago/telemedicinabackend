const Appointment = require("../models/appointmentModel");

// Criar um novo agendamento
const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar agendamento", error });
  }
};

// Listar todos os agendamentos
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar agendamentos", error });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};

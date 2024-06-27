const Notification = require("../models/notificationModel");

// Enviar notificação
const sendNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: "Erro ao enviar notificação", error });
  }
};

// Listar notificações de um usuário
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.userId });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar notificações", error });
  }
};

module.exports = { sendNotification, getNotifications };

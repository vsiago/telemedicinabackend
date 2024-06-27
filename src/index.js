require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configurações do middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Conexão com o MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://vsiago23:4k5kGgO3Rj6tYClK@cluster0.aetbqt4.mongodb.net/telemedicina"
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

// Importação de rotas
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const userRoutes = require("./routes/userRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes"); // Adicionado
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const notificationRoutes = require("./routes/notificationRoutes"); // Adicionado
const videoRecordRoutes = require("./routes/videoRecordRoutes"); // Adicionado

// Utilização de rotas
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/medical-records", medicalRecordRoutes); // Adicionado
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/notifications", notificationRoutes); // Adicionado
app.use("/api/video-records", videoRecordRoutes); // Adicionado

// Configuração do servidor
const PORT = process.env.PORT || 3131;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

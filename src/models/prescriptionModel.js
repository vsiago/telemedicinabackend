const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medications: [
      {
        name: { type: String, required: true },
        dosage: { type: String },
        instructions: { type: String },
      },
    ],
    issueDate: {
      type: Date,
      default: Date.now,
    },
    validityDays: {
      type: Number,
      default: 30,
    },
  },
  { timestamps: true }
);

const Prescription = mongoose.model("Prescription", prescriptionSchema);
module.exports = Prescription;

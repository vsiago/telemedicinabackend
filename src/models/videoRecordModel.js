const mongoose = require("mongoose");

const videoRecordSchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const VideoRecord = mongoose.model("VideoRecord", videoRecordSchema);

module.exports = VideoRecord;

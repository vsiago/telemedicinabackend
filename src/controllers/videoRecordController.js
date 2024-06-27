const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const VideoRecord = require("../models/videoRecordModel");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const uploadVideo = async (req, res) => {
  const { file } = req; // Arquivo de vídeo enviado na requisição
  const { appointmentId, duration } = req.body;

  const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `videos/${file.originalname}`, // Nome do arquivo no S3
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(uploadParams);
    await s3Client.send(command);

    const videoUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/videos/${file.originalname}`;

    const videoRecord = new VideoRecord({
      appointment: appointmentId,
      url: videoUrl,
      duration,
    });
    await videoRecord.save();

    res.status(201).json(videoRecord);
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer upload do vídeo", error });
  }
};

const getVideoRecords = async (req, res) => {
  try {
    const videoRecords = await VideoRecord.find({
      appointment: req.params.appointmentId,
    }).populate("appointment");
    res.status(200).json(videoRecords);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar vídeos", error });
  }
};

module.exports = { uploadVideo, getVideoRecords };

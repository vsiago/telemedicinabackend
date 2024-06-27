const errorHandler = (err, req, res, next) => {
  console.error("Erro:", err);
  res.status(500).json({ message: "Erro interno do servidor" });
};

module.exports = errorHandler;

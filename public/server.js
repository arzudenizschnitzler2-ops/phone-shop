const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/produkte", async (req, res) => {
  const produkte = await prisma.product.findMany();
  res.json(produkte);
});

app.listen(5000, () => {
  console.log("Server läuft auf Port 5000");
});
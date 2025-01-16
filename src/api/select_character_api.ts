import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (_req, res) => {
  res.send("サーバーは起動されています");
});

app.patch("/api/user/character_id", async (req, res) => {
  const { id, character_id } = req.body;
  try {
    const updateUser = await prisma.user.update({
      where: { id },
      data: { character_id },
    });
    res.status(200).json({ message: "キャラクター選択完了", user: updateUser });
  } catch {
    res.status(500).json({ error: "サーバーエラーが発生しました" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

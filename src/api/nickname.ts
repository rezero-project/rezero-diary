import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["PATCH", "GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (_req, res) => {
  res.send("サーバーは起動されています");
});

app.patch("/api/user/nickname", async (req, res) => {
  const { id, nickname } = req.body;
  if (!nickname) {
    return res.status(400).json({ error: "ニックネームが見つかりません" });
  }
  try {
    const newUser = await prisma.user.update({
      where: { id },
      data: {
        nickname,
      },
    });
    res.status(200).json({ message: "成功", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "failed" });
  }
});

app.listen(3000, () => {
  console.log(" http://localhost:3000");
});

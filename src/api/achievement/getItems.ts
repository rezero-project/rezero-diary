import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

// JSONリクエストを解析するミドルウェア
// CORSミドルウェアの設定
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ルートエンドポイントの定義
app.get("/", (_req, res) => {
  res.send("サーバーは正常に作動しています！");
});

// エンドポイントの設定
app.get("/api/achievements/get-items", async (_req, res) => {
  try {
    const achievements = await prisma.achievement.findMany();
    res.status(200).json(achievements);
  } catch (error) {
    console.error("データの取得に失敗しました。", error);
    res
      .status(500)
      .json({ message: "データの取得に失敗しました。（エラーコード：500）" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`サーバーがhttp://localhost:${PORT}で起動しました。`);
});

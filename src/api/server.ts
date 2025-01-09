import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

//フロントエンドとバックエンドが異なるポート番号でも通信を許可してくれる
app.use(cors());
//クライアントがサーバーにアクセスするとメッセージ表示
app.get("/", (_req, res) => {
  res.send("Welcome to the API server!");
});
// ユーザーのニックネームを取得するエンドポイント
app.get("/api/nickname/:id", async (req, res) => {
  //idは数値で渡す
  const userId = parseInt(req.params.id, 10);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { nickname: true },
    });

    if (user) {
      console.log("ユーザーデータ:", user);
      res.json(user);
    } else {
      res.status(404).json({ message: "ユーザーが見つかりません" });
    }
  } catch (error) {
    console.log("fetchエラー", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//目標取得
app.get("/api/goal/:id", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  console.log("id:", userId);
  try {
    const user = await prisma.goal.findUnique({
      where: { id: userId },
      select: { content: true },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "ユーザーが見つかりません" });
    }
  } catch (error) {
    console.log("fetchエラー", error);
    res.status(500).json({ error: "サーバーエラー" });
  }
});
//今日の顔取得
app.get("/api/diary/:id", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  console.log("id:", userId);
  try {
    const user = await prisma.diary.findUnique({
      where: { id: userId },
      select: { image_path: true },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "ユーザーが見つかりません" });
    }
  } catch (error) {
    console.log("fetchエラー", error);
    res.status(500).json({ error: "サーバーエラー" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost: 3000");
});

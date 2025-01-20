import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// ユーザーのニックネームを取得するエンドポイント
router.get("/:id/nickname", async (req, res) => {
  console.log("エンドポイントが呼び出されました:", req.url);
  //idは数値で渡す
  const userId = parseInt(req.params.id, 10);
  console.log("リクエストされたユーザーid:", userId);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { nickname: true },
    });
    console.log("Prismaクエリ結果:", user);


    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "ユーザーが見つかりません" });
    }
  } catch (error) {
    console.log("fetchエラー", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//目標取得を取得するエンドポイント
router.get("/:id/goal", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
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
//今日の顔を取得するエンドポイント
router.get("/:id/diary", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
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

export default router;

import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

// 達成項目取得エンドポイントの設定
router.get("/get-items", async (_req, res) => {
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

export default router;

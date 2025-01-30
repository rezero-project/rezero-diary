import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const router = express.Router();

// 日記の保存処理
router.post("/diaries", async (req, res) => {
  const { title, content, createdAt, image_path, user_id } = req.body;
  console.log("POST /api/diaries が呼ばれた");
  try {
    const newDiary = await prisma.diary.create({
      data: {
        title,
        content,
        createdAt,
        image_path,
        user_id,
      },
    });
    res.status(200).json({ message: "日記が保存されました", newDiary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "日記の保存に失敗しました" });
  }
});

router.patch("/diary:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, updatedAt, image_path } = req.body;
  try {
    const updatedDiary = await prisma.diary.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        updatedAt: updatedAt || new Date(),
        image_path,
      },
    });
    res.status(200).json({ message: "日記が更新されました", updatedDiary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "日記の更新に失敗しました" });
  }
});

export default router;

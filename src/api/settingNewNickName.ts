import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

// const app = express();
const prisma = new PrismaClient();
const router = express.Router();

router.use(express.json());

router.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);

// //フォームに入力した新しいニックネームをデータベースに反映させて
// //headerのニックネーム欄に即時反映させる
router.patch("/:id/nickname", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  //情報を分割代入で取得
  const { nickname } = req.body;
  try {
    const updateNickname = await prisma.user.update({
      where: { id: userId },
      data: { nickname },
    });
    res
      .status(200)
      .json({ message: "ニックネームを更新しました", user: updateNickname });
  } catch {
    res.status(500).json({ error: "サーバーエラー" });
  }
});

export default router;

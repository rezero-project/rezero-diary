import { PrismaClient } from "@prisma/client";
import express from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = express.Router();

//ログインエンドポイント
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "必要な情報を全て入力してください" });
  }
  try {
    const loginUser = await prisma.user.findFirst({
      //データベースからユーザーのメールアドレスを検索
      where: { email },
    });
    if (!loginUser) {
      return res.status(404).json({ error: "ユーザーが見つかりません。" });
    }
    //データベースのパスワードと照合
    const matchedPassword = await bcrypt.compare(password, loginUser.password);
    if (!matchedPassword) {
      return res.status(401).json({ error: "パスワードが間違っています。" });
    }
    //ログイン成功
    res
      .status(200)
      .json({ message: "ログインしました。", userId: loginUser.id });
  } catch (error) {
    console.error("エラー詳細:", error);
    res.status(500).json({ error: "ログインに失敗しました。" });
  }
});
export default router;

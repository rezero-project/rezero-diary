import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
// express.Router()を使用することでルーティングが可能となり、モジュール化できる
const router = express.Router();

// 新規会員登録エンドポイントの設定
router.post("/create", async (req, res) => {
  // req.bodyから各情報を分割代入で取得
  const { name, birthday, email, password } = req.body;
  // いずれかが未入力のとき、400エラー（必要な情報をすべて入力してください。）を返す
  if (!name || !birthday || !email || !password) {
    return res
      .status(400)
      .json({ error: "必要な情報をすべて入力してください。" });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        birthday,
        email,
        password,
      },
    });
    res
      .status(200)
      .json({ message: "ユーザーデータが保存されました。", newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "ユーザーデータの保存に失敗しました。" });
  }
});

export default router;

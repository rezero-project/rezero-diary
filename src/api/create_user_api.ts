import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

// JSON リクエストを解析するミドルウェア
app.use(express.json());

// CORSミドルウェアの設定
// クライアントとサーバーのオリジン（スキーム、ホスト、ポートの組み合わせ）が異なる場合、corsを設定して他のドメイン名との通信を許可する必要がある。
app.use(
  cors({
    origin: "http://localhost:5173", // クライアントのURLを指定
    methods: ["GET", "POST"], // 許可するHTTPメソッドを指定
    allowedHeaders: ["Content-Type"], // 必要なヘッダーを指定
  })
);

// ルートエンドポイントの定義
// サーバー起動時に表示される
// _req：Typescriptでは未使用のパラメータは_(アンダースコア)で始めないとエラーになる。
app.get("/", (_req, res) => {
  res.send("サーバーは正常に動作しています！");
});

// エンドポイントの設定
app.post("/api/user/create", async (req, res) => {
  // req.bodyから各情報を分割代入で取得
  const { name, birthday, email, password } = req.body;
  // いずれかが未入力のとき、400エラー（すべての項目の入力が必須です。）を返す
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

// サーバー起動
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`サーバーが http://localhost:${PORT} で起動しました。`);
});

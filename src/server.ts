import express from "express";
import cors from "cors";
import createUserRoutes from "./api/user/create";
import getAchievementItemsRoutes from "./api/achievement/getItems";
import loginUserRoutes from "./api/user/login";
import headerRoutes from "./api/header";
import settingNewNicknameRoutes from "./api/settingNewNickName";
import diariesRoutes from "./api/diaries";

const app = express();
const port = 3000;

// CORSミドルウェアの設定
// クライアントとサーバーのオリジン（スキーム、ホスト、ポートの組み合わせ）が異なる場合、corsを設定して他のドメイン名との通信を許可する必要がある。
app.use(
  cors({
    origin: "http://localhost:5173", // クライアントのURLを指定
    methods: ["GET", "POST", "PATCH"], // 許可するHTTPメソッドを指定
    allowedHeaders: ["Content-Type"], // 必要なヘッダーを指定
  })
);

// JSON リクエストを解析するミドルウェア
app.use(express.json());

// インポートしたルーティングをアプリに適用
app.use("/api/user", createUserRoutes, loginUserRoutes);
app.use("/api/achievement", getAchievementItemsRoutes);
app.use("/api/user/header", headerRoutes);
app.use("/api/settingNewNickname", settingNewNicknameRoutes);
app.use("/api", diariesRoutes);
// ルートエンドポイントの定義
// サーバー起動時に表示される
// _req：Typescriptでは未使用のパラメータは_(アンダースコア)で始めないとエラーになる。
app.get("/", (_req, res) => {
  res.send("サーバーは正常に動作しています！");
});

// サーバー起動
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました。`);
});

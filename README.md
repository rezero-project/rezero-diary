# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Vue+Vite プロジェクト作成

1. 新規プロジェクト作成

   `npm create vite@latest my-vue-app(作成したいプロジェクト名)`

2. プロジェクトのテンプレート選択

   ```
   ✔ Select a framework: → vue
   ✔ Select a variant: → TypeScript
   ```

3. プロジェクトのディレクトリに移動し、必要なパッケージをインストール

   `npm install`

4. サーバ起動

   `npm run dev`

# データベース作成と Prisma

### 1.PostgreSQL のセットアップ

- pgAdmin でデータベースの作成　例（rezero-diary）

  試しに SQL でデータを追加してみると良い

### 2.Prisma のインストール

- 以下のコマンドでインストール（yarn は少し違う）

  ```
  npm install prisma @prisma/client
  ```

- 初期化

  ```
  npx prisma init
  ```

  ルートディレクトリに prisma ディレクトリと prisma/schema.prisma ファイルが作成される。

  ※.env ファイルも作成されるが作成されない場合は手動で作成する

  .env ファイルは共有されないように.gitignore に以下を記述

  ```
  # env files
  *.env
  .env*
  ```

### 3.PostgreSQL データベースと Prisma の接続

- .env ファイルに Postgres の接続情報を設定

  ```
  DATABASE_URL="postgresql://user名:パスワード@ホスト名:ポート番号/DB名"
  ```

### 4.Prisma スキーマの設定

- データベースにモデルを定義

```
model モデル名 {
  フィールド名 データ型 （制約）
}
```

### 5.マイグレーションの実行

- データモデルをデータベースに反映させるためのマイグレーションコマンド

```
npx prisma migrate dev --name init
```

    ※init に関しては変更内容によって変更する

- 既に migrations ディレクトリがある場合には、以下のコマンドを実行することで既にあるマイグレーションファイルを参照し、データベースに反映される

```
npx prisma migrate deploy
```

### 6.Prisma クライアントの生成

- データベースの操作に必要

```
npx prisma generate
```

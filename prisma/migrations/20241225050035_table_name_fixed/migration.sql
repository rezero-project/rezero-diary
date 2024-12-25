/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `character_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ADD COLUMN     "birthday" TEXT NOT NULL,
ADD COLUMN     "character_id" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";

-- DropTable
DROP TABLE "Users";

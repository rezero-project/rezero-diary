/*
  Warnings:

  - You are about to drop the column `progress` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Achievement` table. All the data in the column will be lost.
  - Added the required column `description` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quota` to the `Achievement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "progress",
DROP COLUMN "title",
DROP COLUMN "user_id",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '初めて日記を書く',
ADD COLUMN     "quota" INTEGER NOT NULL DEFAULT 1;

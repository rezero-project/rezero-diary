/*
  Warnings:

  - Changed the type of `progress` on the `Achievement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "progress",
ADD COLUMN     "progress" INTEGER NOT NULL;

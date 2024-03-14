/*
  Warnings:

  - You are about to drop the column `userId` on the `Billyng` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Billyng_userId_idx";

-- AlterTable
ALTER TABLE "Billyng" DROP COLUMN "userId";

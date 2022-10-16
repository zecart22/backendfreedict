/*
  Warnings:

  - You are about to drop the column `isFavorite` on the `words` table. All the data in the column will be lost.
  - You are about to drop the column `isInHistoric` on the `words` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "words" DROP COLUMN "isFavorite",
DROP COLUMN "isInHistoric";

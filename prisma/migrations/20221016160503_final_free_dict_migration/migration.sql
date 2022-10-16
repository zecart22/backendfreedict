/*
  Warnings:

  - You are about to drop the column `user_id` on the `words` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "words" DROP CONSTRAINT "words_user_id_fkey";

-- AlterTable
ALTER TABLE "words" DROP COLUMN "user_id";

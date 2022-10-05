/*
  Warnings:

  - Added the required column `word_id` to the `favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word_id` to the `historicals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "favorites" ADD COLUMN     "word_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "historicals" ADD COLUMN     "word_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historicals" ADD CONSTRAINT "historicals_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "words"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

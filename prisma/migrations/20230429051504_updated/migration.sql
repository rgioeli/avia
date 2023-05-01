/*
  Warnings:

  - You are about to drop the column `channel` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "channel",
ADD COLUMN     "medicalSearchTermId" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_medicalSearchTermId_fkey" FOREIGN KEY ("medicalSearchTermId") REFERENCES "MedicalSearchTerm"("id") ON DELETE SET NULL ON UPDATE CASCADE;

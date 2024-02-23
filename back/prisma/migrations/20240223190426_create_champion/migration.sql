/*
  Warnings:

  - You are about to drop the column `updateAt` on the `champion` table. All the data in the column will be lost.
  - Added the required column `type` to the `Champion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `champion` DROP COLUMN `updateAt`,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

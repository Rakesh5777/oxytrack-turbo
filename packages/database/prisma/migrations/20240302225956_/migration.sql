/*
  Warnings:

  - The primary key for the `MasterUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `MasterUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "MasterUsers" DROP CONSTRAINT "MasterUsers_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MasterUsers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MasterUsers_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "MasterUsers_id_key" ON "MasterUsers"("id");

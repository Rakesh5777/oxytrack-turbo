/*
  Warnings:

  - The primary key for the `ContactPerson` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ContactPersonToCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `ContactPerson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ContactPersonToCustomer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ContactPersonToCustomer" DROP CONSTRAINT "ContactPersonToCustomer_contactPersonId_fkey";

-- AlterTable
ALTER TABLE "ContactPerson" DROP CONSTRAINT "ContactPerson_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContactPerson_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContactPerson_id_seq";

-- AlterTable
ALTER TABLE "ContactPersonToCustomer" DROP CONSTRAINT "ContactPersonToCustomer_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "contactPersonId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContactPersonToCustomer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContactPersonToCustomer_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "ContactPerson_id_key" ON "ContactPerson"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ContactPersonToCustomer_id_key" ON "ContactPersonToCustomer"("id");

-- AddForeignKey
ALTER TABLE "ContactPersonToCustomer" ADD CONSTRAINT "ContactPersonToCustomer_contactPersonId_fkey" FOREIGN KEY ("contactPersonId") REFERENCES "ContactPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

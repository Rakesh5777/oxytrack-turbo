/*
  Warnings:

  - The primary key for the `HouseHoldCustomer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `laboratory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `HouseHoldCustomer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `laboratory` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ContactPersonToCustomer" ALTER COLUMN "customerId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "HouseHoldCustomer" DROP CONSTRAINT "HouseHoldCustomer_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "HouseHoldCustomer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "HouseHoldCustomer_id_seq";

-- AlterTable
ALTER TABLE "laboratory" DROP CONSTRAINT "laboratory_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "laboratory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "laboratory_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "HouseHoldCustomer_id_key" ON "HouseHoldCustomer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "laboratory_id_key" ON "laboratory"("id");

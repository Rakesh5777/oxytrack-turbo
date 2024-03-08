/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the `Ambulance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactToCustomer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hospitals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HouseHoldCustomer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `laboratory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContactToCustomer" DROP CONSTRAINT "ContactToCustomer_contactId_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "createdAt",
ADD COLUMN     "customersId" TEXT;

-- DropTable
DROP TABLE "Ambulance";

-- DropTable
DROP TABLE "ContactToCustomer";

-- DropTable
DROP TABLE "Hospitals";

-- DropTable
DROP TABLE "HouseHoldCustomer";

-- DropTable
DROP TABLE "laboratory";

-- CreateTable
CREATE TABLE "Customers" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "type" "CustomerType" NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "emailAddress" TEXT,
    "address" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityRequirment" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "customerId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "EntityRequirment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_id_key" ON "Customers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EntityRequirment_id_key" ON "EntityRequirment"("id");

-- AddForeignKey
ALTER TABLE "EntityRequirment" ADD CONSTRAINT "EntityRequirment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_customersId_fkey" FOREIGN KEY ("customersId") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

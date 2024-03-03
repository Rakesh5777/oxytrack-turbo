/*
  Warnings:

  - You are about to drop the `ContactPerson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactPersonToCustomer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContactPersonToCustomer" DROP CONSTRAINT "ContactPersonToCustomer_contactPersonId_fkey";

-- DropTable
DROP TABLE "ContactPerson";

-- DropTable
DROP TABLE "ContactPersonToCustomer";

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "contactName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactToCustomer" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "contactId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "customer" "CustomerType" NOT NULL,

    CONSTRAINT "ContactToCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_id_key" ON "Contact"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_mobileNumber_key" ON "Contact"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ContactToCustomer_id_key" ON "ContactToCustomer"("id");

-- AddForeignKey
ALTER TABLE "ContactToCustomer" ADD CONSTRAINT "ContactToCustomer_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

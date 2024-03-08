-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_customersId_fkey";

-- CreateTable
CREATE TABLE "AdditionalRecord" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "customerId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "AdditionalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerContact" (
    "customerId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "CustomerContact_pkey" PRIMARY KEY ("customerId","contactId")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdditionalRecord_id_key" ON "AdditionalRecord"("id");

-- AddForeignKey
ALTER TABLE "AdditionalRecord" ADD CONSTRAINT "AdditionalRecord_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContact" ADD CONSTRAINT "CustomerContact_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContact" ADD CONSTRAINT "CustomerContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

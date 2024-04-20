/*
  Warnings:

  - You are about to drop the column `customer_id` on the `Cylinders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cylinders" DROP CONSTRAINT "Cylinders_customer_id_fkey";

-- AlterTable
ALTER TABLE "Cylinders" DROP COLUMN "customer_id",
ADD COLUMN     "customerId" TEXT;

-- AddForeignKey
ALTER TABLE "Cylinders" ADD CONSTRAINT "Cylinders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

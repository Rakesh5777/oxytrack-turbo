/*
  Warnings:

  - Added the required column `currentLocationId` to the `Cylinders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CylinderState" AS ENUM ('FULL', 'EMPTY', 'IN_USE', 'IN_SERVICE', 'IN_REPAIR');

-- CreateEnum
CREATE TYPE "LocationEntityTypes" AS ENUM ('CUSTOMER', 'WAREHOUSE');

-- AlterTable
ALTER TABLE "Cylinders" ADD COLUMN     "currentLocationId" TEXT NOT NULL,
ADD COLUMN     "customer_id" TEXT,
ADD COLUMN     "cylinderState" "CylinderState" NOT NULL DEFAULT 'FULL',
ADD COLUMN     "isOwn" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "entityId" TEXT NOT NULL,
    "entityType" "LocationEntityTypes" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_id_key" ON "Location"("id");

-- AddForeignKey
ALTER TABLE "Cylinders" ADD CONSTRAINT "Cylinders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cylinders" ADD CONSTRAINT "Cylinders_currentLocationId_fkey" FOREIGN KEY ("currentLocationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

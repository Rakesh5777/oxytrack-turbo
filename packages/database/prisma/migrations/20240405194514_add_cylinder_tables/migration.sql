-- CreateEnum
CREATE TYPE "CylinderType" AS ENUM ('OXYGEN', 'NITRUOUS_OXIDE', 'CARBON_DIOXIDE');

-- CreateEnum
CREATE TYPE "CylinderSize" AS ENUM ('TYPE_A', 'TYPE_B', 'TYPE_D');

-- CreateTable
CREATE TABLE "Cylinders" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "cylinderId" TEXT NOT NULL,
    "type" "CylinderType" NOT NULL,
    "size" "CylinderSize" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cylinders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cylinders_id_key" ON "Cylinders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cylinders_cylinderId_key" ON "Cylinders"("cylinderId");

-- DropForeignKey
ALTER TABLE "Cylinders" DROP CONSTRAINT "Cylinders_currentLocationId_fkey";

-- AlterTable
ALTER TABLE "Cylinders" ALTER COLUMN "currentLocationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cylinders" ADD CONSTRAINT "Cylinders_currentLocationId_fkey" FOREIGN KEY ("currentLocationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

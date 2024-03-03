/*
  Warnings:

  - The primary key for the `Ambulance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Hospitals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Ambulance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Hospitals` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Ambulance" DROP CONSTRAINT "Ambulance_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ambulance_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ambulance_id_seq";

-- AlterTable
ALTER TABLE "Hospitals" DROP CONSTRAINT "Hospitals_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hospitals_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hospitals_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Ambulance_id_key" ON "Ambulance"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hospitals_id_key" ON "Hospitals"("id");

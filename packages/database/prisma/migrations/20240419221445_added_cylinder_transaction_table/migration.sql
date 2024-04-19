-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INWARDS', 'OUTWARDS', 'TRANSFER', 'REFILL');

-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CylinderTransaction" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "employeeId" TEXT NOT NULL,
    "cylinderId" TEXT NOT NULL,
    "cylinderState" "CylinderState" NOT NULL,
    "fromLocationId" TEXT NOT NULL,
    "toLocationId" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CylinderTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_id_key" ON "Employees"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_mobileNumber_key" ON "Employees"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "CylinderTransaction_id_key" ON "CylinderTransaction"("id");

-- AddForeignKey
ALTER TABLE "CylinderTransaction" ADD CONSTRAINT "CylinderTransaction_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CylinderTransaction" ADD CONSTRAINT "CylinderTransaction_cylinderId_fkey" FOREIGN KEY ("cylinderId") REFERENCES "Cylinders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CylinderTransaction" ADD CONSTRAINT "CylinderTransaction_fromLocationId_fkey" FOREIGN KEY ("fromLocationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CylinderTransaction" ADD CONSTRAINT "CylinderTransaction_toLocationId_fkey" FOREIGN KEY ("toLocationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

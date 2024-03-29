-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('HOSPITAL', 'AMBULANCE', 'LABORATORY', 'HOUSEHOLD');

-- CreateTable
CREATE TABLE "MasterUsers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MasterUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospitals" (
    "id" SERIAL NOT NULL,
    "hospitalName" TEXT NOT NULL,
    "hospitalAddress" TEXT NOT NULL,
    "emailAddress" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Hospitals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ambulance" (
    "id" SERIAL NOT NULL,
    "ambulanceName" TEXT NOT NULL,
    "ambulanceNumber" TEXT NOT NULL,
    "emailAddress" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Ambulance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratory" (
    "id" SERIAL NOT NULL,
    "labName" TEXT NOT NULL,
    "labAddress" TEXT NOT NULL,
    "emailAddress" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "laboratory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HouseHoldCustomer" (
    "id" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "emailAddress" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "HouseHoldCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactPerson" (
    "id" SERIAL NOT NULL,
    "contactName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ContactPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactPersonToCustomer" (
    "id" SERIAL NOT NULL,
    "contactPersonId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "customer" "CustomerType" NOT NULL,

    CONSTRAINT "ContactPersonToCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MasterUsers_email_key" ON "MasterUsers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Hospitals_hospitalName_key" ON "Hospitals"("hospitalName");

-- CreateIndex
CREATE UNIQUE INDEX "Ambulance_ambulanceName_key" ON "Ambulance"("ambulanceName");

-- CreateIndex
CREATE UNIQUE INDEX "Ambulance_ambulanceNumber_key" ON "Ambulance"("ambulanceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "laboratory_labName_key" ON "laboratory"("labName");

-- CreateIndex
CREATE UNIQUE INDEX "HouseHoldCustomer_customerName_key" ON "HouseHoldCustomer"("customerName");

-- CreateIndex
CREATE UNIQUE INDEX "ContactPerson_mobileNumber_key" ON "ContactPerson"("mobileNumber");

-- AddForeignKey
ALTER TABLE "ContactPersonToCustomer" ADD CONSTRAINT "ContactPersonToCustomer_contactPersonId_fkey" FOREIGN KEY ("contactPersonId") REFERENCES "ContactPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

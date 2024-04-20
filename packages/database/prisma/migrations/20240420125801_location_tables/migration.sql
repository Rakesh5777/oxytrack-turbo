-- CreateTable
CREATE TABLE "WareHouse" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WareHouse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WareHouse_id_key" ON "WareHouse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouse_name_key" ON "WareHouse"("name");

-- RenameForeignKey
ALTER TABLE "Location" RENAME CONSTRAINT "Location_entityId_fkey" TO "customer";

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "warehouse" FOREIGN KEY ("entityId") REFERENCES "WareHouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

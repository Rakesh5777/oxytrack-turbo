-- RenameForeignKey
ALTER TABLE "Location" RENAME CONSTRAINT "customer" TO "location_customer_fk";

-- RenameForeignKey
ALTER TABLE "Location" RENAME CONSTRAINT "warehouse" TO "location_warehouse_fk";

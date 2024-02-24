/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `MasterUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MasterUsers_username_key" ON "MasterUsers"("username");

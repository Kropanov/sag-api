-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_userId_fkey";

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

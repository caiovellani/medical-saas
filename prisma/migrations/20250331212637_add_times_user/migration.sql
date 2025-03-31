-- AlterTable
ALTER TABLE "users" ADD COLUMN     "times" TEXT[] DEFAULT ARRAY[]::TEXT[];

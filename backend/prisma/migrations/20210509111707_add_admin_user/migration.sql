-- CreateEnum
CREATE TYPE "UserProfile" AS ENUM ('ADMIN', 'CHALLENGER');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "password_hash" VARCHAR(100);

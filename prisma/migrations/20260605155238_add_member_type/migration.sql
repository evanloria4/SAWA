-- CreateEnum
CREATE TYPE "MemberType" AS ENUM ('individual', 'practice');

-- AlterTable
ALTER TABLE "MemberProfile" ADD COLUMN     "memberType" "MemberType" NOT NULL DEFAULT 'individual';

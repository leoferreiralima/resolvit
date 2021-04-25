-- CreateEnum
CREATE TYPE "UserOccupation" AS ENUM ('DEVELOPER', 'STUDENT', 'ENTHUSIASTIC');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "users" (
    "email" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "github_id" VARCHAR(100),
    "gitlab_id" VARCHAR(100),
    "picture_url" VARCHAR(255),
    "occupation" "UserOccupation",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" CHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_technologies" (
    "user_id" VARCHAR(100) NOT NULL,
    "category_id" CHAR(36) NOT NULL,
    "focus" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("user_id","category_id")
);

-- CreateTable
CREATE TABLE "challenges" (
    "id" CHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "helps" VARCHAR(100)[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "challenge_resolutions" (
    "id" CHAR(36) NOT NULL,
    "user_id" VARCHAR(100) NOT NULL,
    "challenge_id" CHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolution_link" VARCHAR(100) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "challenge_resolution_comments" (
    "id" CHAR(36) NOT NULL,
    "resolution_id" CHAR(36) NOT NULL,
    "user_id" VARCHAR(100) NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" CHAR(36) NOT NULL,
    "from_id" VARCHAR(100) NOT NULL,
    "message" VARCHAR(300) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChallengeCategory" (
    "A" CHAR(36) NOT NULL,
    "B" CHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChallengeCategory_AB_unique" ON "_ChallengeCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ChallengeCategory_B_index" ON "_ChallengeCategory"("B");

-- AddForeignKey
ALTER TABLE "user_technologies" ADD FOREIGN KEY ("user_id") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_technologies" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_resolutions" ADD FOREIGN KEY ("user_id") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_resolutions" ADD FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_resolution_comments" ADD FOREIGN KEY ("resolution_id") REFERENCES "challenge_resolutions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_resolution_comments" ADD FOREIGN KEY ("user_id") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD FOREIGN KEY ("from_id") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeCategory" ADD FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeCategory" ADD FOREIGN KEY ("B") REFERENCES "challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

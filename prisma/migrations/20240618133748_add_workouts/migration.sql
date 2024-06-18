-- CreateTable
CREATE TABLE "workouts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

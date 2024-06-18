-- CreateTable
CREATE TABLE "warmups" (
    "id" SERIAL NOT NULL,
    "length" INTEGER NOT NULL,
    "workoutId" INTEGER NOT NULL,

    CONSTRAINT "warmups_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "warmups_workoutId_key" ON "warmups"("workoutId");

-- AddForeignKey
ALTER TABLE "warmups" ADD CONSTRAINT "warmups_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

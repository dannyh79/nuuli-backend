import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const workoutRecord = {
    id: 1,
    name: 'Full Body',
    instruction: `This training program will begin from a full body circuit training on the first day:
You will be able to learn how to use different muscle groups from today’s training.
You will be able to learn how to use different muscle groups.`,
  };
  const workout = await prisma.workout.upsert({
    where: { id: workoutRecord.id },
    update: workoutRecord,
    create: workoutRecord,
  });
  const warmupRecord = {
    id: 1,
    length: 300,
    workoutId: workoutRecord.id,
  };
  const warmup = await prisma.warmup.upsert({
    where: { id: warmupRecord.id },
    update: warmupRecord,
    create: warmupRecord,
  });

  console.log({ workout, warmup });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

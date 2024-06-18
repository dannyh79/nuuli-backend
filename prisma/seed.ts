import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const workoutRecord = {
    id: 1,
    name: 'Full Body',
  };
  const workout = await prisma.workout.upsert({
    where: { id: workoutRecord.id },
    update: workoutRecord,
    create: workoutRecord,
  });

  console.log({ workout });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

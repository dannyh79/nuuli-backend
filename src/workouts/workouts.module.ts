import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import WorkoutsRepository from '../repositories/WorkoutsRepository';
import { WorkoutsService } from './workouts.service';
import { WorkoutsResolver } from './workouts.resolver';

@Module({
  providers: [
    WorkoutsService,
    WorkoutsResolver,
    PrismaService,
    { provide: 'WorkoutsRepository', useClass: WorkoutsRepository },
  ],
})
export class WorkoutsModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import WorkoutsRepository from '../repositories/WorkoutsRepository';
import WarmupsRepository from '../repositories/WarmupsRepository';
import { WorkoutsService } from './workouts.service';
import { WorkoutsResolver } from './workouts.resolver';
import { WarmupsService } from './warmups.service';

@Module({
  providers: [
    WorkoutsService,
    WarmupsService,
    WorkoutsResolver,
    PrismaService,
    { provide: 'WorkoutsRepository', useClass: WorkoutsRepository },
    { provide: 'WarmupsRepository', useClass: WarmupsRepository },
  ],
})
export class WorkoutsModule {}

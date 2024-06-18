import { Module } from '@nestjs/common';
import WorkoutsRepository from '../repositories/WorkoutsRepository';
import { WorkoutsService } from './workouts.service';
import { WorkoutsResolver } from './workouts.resolver';

@Module({
  providers: [
    WorkoutsService,
    WorkoutsResolver,
    { provide: 'WorkoutsRepository', useClass: WorkoutsRepository },
  ],
})
export class WorkoutsModule {}

import { Injectable } from '@nestjs/common';
import { Workout } from './workout.model';

@Injectable()
export class WorkoutsService {
  findById(_id: number): Promise<Workout> {
    const stubbedWorkout = {
      id: 1,
      name: 'Full Body',
    };
    return new Promise((resolve) => resolve(stubbedWorkout));
  }
}

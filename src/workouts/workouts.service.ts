import { Inject, Injectable } from '@nestjs/common';
import Repository from 'src/repositories/types';
import { Workout } from './workout.model';

@Injectable()
export class WorkoutsService {
  constructor(
    @Inject('WorkoutsRepository')
    private workoutsRepository: Repository<Workout>,
  ) {}

  findById(id: number): Promise<Workout> {
    return this.workoutsRepository.findById(id);
  }
}

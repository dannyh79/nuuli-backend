import { Inject, Injectable } from '@nestjs/common';
import Repository from 'src/repositories/types';
import { Warmup } from './warmup.entity';

@Injectable()
export class WarmupsService {
  constructor(
    @Inject('WarmupsRepository')
    private warmupsRepository: Repository<Warmup, number>,
  ) {}

  findByWorkout(workoutId: number): Promise<Warmup> {
    return this.warmupsRepository.findBy(workoutId);
  }
}

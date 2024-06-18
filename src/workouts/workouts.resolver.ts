import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Workout } from './workout.model';
import { WorkoutsService } from './workouts.service';

@Resolver(() => Workout)
export class WorkoutsResolver {
  constructor(
    private workoutsService: WorkoutsService,
  ) {}

  @Query(() => Workout)
  async workout(@Args('id', { type: () => Int }) id: number) {
    return this.workoutsService.findById(id);
  }
}

import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Workout } from './workout.entity';
import { WorkoutsService } from './workouts.service';
import { WarmupsService } from './warmups.service';

@Resolver(() => Workout)
export class WorkoutsResolver {
  constructor(
    private workoutsService: WorkoutsService,
    private warmupsService: WarmupsService,
  ) {}

  @Query(() => Workout, { nullable: true })
  async workout(@Args('id', { type: () => Int }) id: number) {
    return this.workoutsService.findById(id);
  }

  @ResolveField()
  async warmup(@Parent() workout: Workout) {
    return this.warmupsService.findByWorkout(workout.id);
  }
}

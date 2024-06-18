import { Workout } from "src/workouts/workout.model";
import Repository from "./types";

export default class WorkoutsRepository implements Repository<Workout, number> {
  async findById(_id: number): Promise<Workout | null> {
    const stubbedWorkout = {
      id: 1,
      name: 'Full Body',
    };
    return new Promise((resolve) => resolve(stubbedWorkout))
  }
}

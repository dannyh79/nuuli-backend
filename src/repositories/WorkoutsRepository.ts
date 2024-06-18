import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Workout } from 'src/workouts/workout.model';
import Repository from './types';

@Injectable()
export default class WorkoutsRepository implements Repository<Workout, number> {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<Workout | null> {
    return this.prisma.workout.findUnique({ where: { id } });
  }
}

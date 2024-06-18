import { Injectable } from '@nestjs/common';
import { Warmup } from 'src/workouts/warmup.entity';
import { PrismaService } from '../prisma/prisma.service';
import Repository from './types';

@Injectable()
export default class WarmupRepository implements Repository<Warmup, number> {
  constructor(private prisma: PrismaService) {}

  /**
   * Not implemented
   */
  async findById(): Promise<null> {
    return Promise.resolve(null);
  }

  async findBy(workoutId: number): Promise<Warmup | null> {
    return this.prisma.warmup.findUnique({ where: { workoutId } });
  }
}

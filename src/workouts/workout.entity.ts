import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Warmup } from './warmup.entity';

@ObjectType()
export class Workout {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  instruction: string;

  @Field({ nullable: true })
  warmup?: Warmup;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Workout {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  instruction: string;
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Warmup {
  @Field()
  id: number;

  @Field({ description: 'Duration in seconds' })
  length: number;
}

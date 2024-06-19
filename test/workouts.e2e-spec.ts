import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const endpoint = '/graphql';

describe('WorkoutsResolver (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('returns { workout } in response.body.data', () => {
    const query = `
    {
      workout(id: 1) {
        id
        name
        instruction
        warmup {
          id
          length
        }
      }
    }
    `;
    const expected = {
      id: 1,
      name: 'Full Body',
      instruction: `This training program will begin from a full body circuit training on the first day:
You will be able to learn how to use different muscle groups from today’s training.
You will be able to learn how to use different muscle groups.`,
      warmup: {
        id: 1,
        length: 300,
      },
    };
    return request(app.getHttpServer())
      .post(endpoint)
      .send({ query })
      .expect(200)
      .expect((res) => expect(res.body.data.workout).toEqual(expected));
  });

  it('returns { workout: null } in response.body.data', () => {
    const query = `
    {
      workout(id: 3345678) {
        id
      }
    }
    `;
    return request(app.getHttpServer())
      .post(endpoint)
      .send({ query })
      .expect(200)
      .expect((res) => expect(res.body.data.workout).toEqual(null));
  });
});

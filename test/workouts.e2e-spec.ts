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

  it('returns a workout by id', () => {
    const query = `
    {
      workout(id: 1) {
        id
        name
      }
    }
    `;
    const expected = {
      id: 1,
      name: 'Full Body',
    };
    return request(app.getHttpServer())
      .post(endpoint)
      .send({ query })
      .expect(200)
      .expect((res) => expect(res.body.data.workout).toEqual(expected));
  });
});

[![CI](https://github.com/dannyh79/nuuli-backend/actions/workflows/main.yml/badge.svg)](https://github.com/dannyh79/nuuli-backend/actions/workflows/main.yml)

# Welcome to the backend nüli test app

For full instructions on what we'd like you to do please visit our [official developer test page](https://www.notion.so/nuliapp/Nuli-Mid-Level-Mobile-Developer-Test-83f53a4746824e4a8f924b8b9fc13d69#27bb0550be78474f830cfa65d552822d)

## Deliverables

- API
    - Endpoints
        - Fetch a workout
            - [x] Basic info
            - [ ] Workout content: warmup w/ circuits, main workout w/ circuits, exercises
        - [ ] Swap an exercise of a workout
        - [ ] Authentication
    - [x] E2E test
    - [x] Documentation with sample request/response
    - [ ] Unit test
- Misc
    - [ ] Assets serving

## Backlog

- API
    - Endpoints
        - Fetch a workout
            - [ ] Workout content: warmup w/ circuits, main workout w/ circuits, exercises
        - [ ] Swap an exercise of a workout
        - [ ] Authentication
    - [ ] Unit test
- Feature
    - [ ] Template-rize workout for individual users to clone
    - [ ] Exercise swapping
- DB
    - [ ] Leverage STI for warmup and workout group records
    - [ ] Normalization
    - [ ] Inspect queries via query plans and optimize when seen fit
- Misc
    - [ ] Assets serving

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ cp .env.example .env
# then update DATABASE_URL inside .env to an actual PostgreSQL endpoint

$ npm run db:migrate:dev

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# access graphQL playground via http://localhost:3000/graphql
```

## Test

```bash
$ cp .env.test.example .env.test.local
# then update DATABASE_URL inside .env.test.local to an actual PostgreSQL endpoint

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation & Sample Request/Response

Use Postman's [import feature](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-data/) to import `/docs/api/postman_collection.json` for API documentation.

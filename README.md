# catalog-backend

A demo back-end application built on NestJS.

## Features

- Basic REST API.
- Data validation of HTTP requests.
- PostgreSQL database interaction with Prisma.
- Database migrations.
- Graceful configuration with `ConfigModule`.
- Type safety between app and database.
- Swagger API docs.
- Pre-commit code formatting.

## Getting started

1.  Clone this repository.
1.  Install dependencies:

        npm install

1.  Create a new PostgreSQL database.
1.  Create an `.env` file in the project root and assign values to environment variables (in accordance to the hints from the `.env.example`).
1.  Apply database migrations:

        npm run prisma:migrate:deploy

1.  Run the app in development mode:

        npm run start:dev

The app will now be running at http://localhost:3000 (or other port if you changed the defaults).

Swagger API docs will be available at http://localhost:3000/api.

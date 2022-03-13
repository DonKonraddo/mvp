## Description backend

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Envs

env       |  value    | description      |
--------- |-----------|------------------|
APP_PORT  | 9090      | Application port |
DB_USER   | root      | DB user          |
DB_PASS   | toor      | DB password      |
DB_NAME   | mvp       | DB name          |
DB_HOST   | localhost | DB host          |
DB_PORT   | 3306      | DB port          |

## Database
The project includes a docker compose file. This is the basic configuration for local development.
The default is set ``platform: linux/x86_64`` for Apple M1 chip if you are using intel chip just remove this line.
To run DB docker container use:
```
 $ docker-compose up
```
## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


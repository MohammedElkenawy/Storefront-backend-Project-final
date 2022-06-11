# Storefront Backend Project

You should run npm install first before executing any of the scripts below.

## Database Setup

1. Create databases (one for development the other for testing)

 
   - Development database
   CREATE DATABASE storefront_db;

   - Test database
   CREATE DATABASE storefront_db_test;
  

2. privileges

   
- connect to storefront and grant privileges to default_user

 >>  \c storefront_db

   GRANT ALL PRIVILEGES ON DATABASE storefront TO postgres

- connect to storefront_test and grant privileges to default_user

>>  \c storefront_db_test

   GRANT ALL PRIVILEGES ON DATABASE storefront_test TO postgres
   

## Ports
- 3000 for server
- 5432 for database

## Scripts

- build: npm run build
- start: npm run start
- migrate down: npm run migrate-down
- test: npm run test
- linting: npm run lint
- format: npm run format
- migrate up: npm run migrate-up


## sample .env
- NODE_ENV=DEV
HOST=
DB=
TEST_DB=
DB_PORT=
USER=
PASSWORD=
PORT=
SALT=
JWT=

# Folders:
>migrations
  >sqls
>spec
  >support

>src

# Authered by
Mohamed Elkenawy

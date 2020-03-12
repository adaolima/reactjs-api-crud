# reactjs-api-crud

Reactjs front-end to connect by api to do CRUD on MYSQL database - Application test for Gazeta do Povo

# RUN API AND FRONT

## Building and running on localhost

## Backend

1. Go to folder backend

```sh

cd backend

```

2. Up the Database Container

Change .env.example to .env , and update if it is necessary for your enviroment.

```sh

docker-compose up -d

```

3. Install dependencies

```sh
yarn install
```

4. Seed your database with users fakes.

```sh

npx sequelize-cli db:seed:all

```

5. Run Server

```sh
yarn serve
```

# API CRUD

[GET , POST , PUT, DELETE] => YOUR_HOST + API_PORT + '/api/v1/users'

# RUN FRONT-END

Install dependencies

```sh
yarn install
```

Run aplication

```sh
yarn start
```

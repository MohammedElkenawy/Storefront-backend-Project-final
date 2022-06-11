## API Endpoints

### user

- index: `GET /user/all` (TOKEN REQUIRED)

- show: `GET /user/:id` (TOKEN REQUIRED)

- create: `POST /user`

  body { firstname, lastname, password }



### product

- index: `GET /product/all`

- show: `GET /product/:id`

- create: `POST /product` (TOKEN REQUIRED)

  body { name, price }



### order

- Current Order by user: `GET /order/:id`



## Database Schema

#### User

- id `[SERIAL PRIMARY KEY]`
- firstName [VARCHAR(100)]
- lastName [VARCHAR(100)]
- password [TEXT]

#### Product

- id `[SERIAL PRIMARY KEY]`
- name [VARCHAR(20)]
- price [integer]

#### Orders

- id `[SERIAL PRIMARY KEY]`
- user_id `[INT REFERENCES users(id)]`
- status of order (ACTIVE | COMPLETE)

## TABLE IF NOT EXISTS orders:
 - id [SERIAL PRIMARY KEY],
 - user_id [INT],
 - order_status [status] ,
 - fk_user [CONSTRAINT]
 - user_id [FOREIGN KEY]
 - users(id) [REFERENCES] 




# Compact Disk Marketplace API

This project is a RESTful API for a Compact Disk (CD) Marketplace application. It supports functionalities for managing artists, genres, CDs, orders, and users. The API is built using Node.js and Express, with Sequelize as the ORM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Artists](#artists)
  - [Genres](#genres)
  - [Orders](#orders)
  - [Users](#users)
- [Models](#models)
- [Error Handling](#error-handling)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/cd-marketplace.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (see [Environment Variables](#environment-variables)).
4. Run the application:
   ```bash
   npm start
   ```

## Usage

The API is designed to be used with an HTTP client like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## API Endpoints

### Artists
- **Create Artist**  
  `POST /artists` - Creates a new artist.  
  **Body**: `{ "name": "Artist Name", "biography": "Biography of the artist" }`

- **Get All Artists**  
  `GET /artists` - Retrieves all artists.

- **Get Artist by ID**  
  `GET /artists/:id` - Retrieves an artist by ID.

- **Update Artist**  
  `PUT /artists/:id` - Updates an artist by ID.  
  **Body**: `{ "name": "New Name", "biography": "Updated biography" }`

- **Delete Artist**  
  `DELETE /artists/:id` - Deletes an artist by ID.

### Genres
- **Create Genre**  
  `POST /genres` - Creates a new genre.  
  **Body**: `{ "name": "Genre Name" }`

- **Get All Genres**  
  `GET /genres` - Retrieves all genres.

- **Get Genre by ID**  
  `GET /genres/:id` - Retrieves a genre by ID.

- **Update Genre**  
  `PUT /genres/:id` - Updates a genre by ID.  
  **Body**: `{ "name": "New Genre Name" }`

- **Delete Genre**  
  `DELETE /genres/:id` - Deletes a genre by ID.

### Orders
- **Make Order**  
  `POST /orders` - Creates a new order.  
  **Body**: `{ "userId": 1, "items": [{ "cdId": 1, "quantity": 2 }] }`

- **Get Orders for User**  
  `GET /orders/user/:userId` - Retrieves all orders for a specific user.

- **Get All Orders**  
  `GET /orders` - Retrieves all orders.

- **Get Order by ID**  
  `GET /orders/:id` - Retrieves an order by ID.

- **Delete Order**  
  `DELETE /orders/:id` - Deletes an order by ID.

### Users
- **Create User**  
  `POST /users` - Creates a new user.  
  **Body**: `{ "name": "User Name", "email": "user@example.com", "password": "Password123!" }`

- **Get All Users**  
  `GET /users` - Retrieves all users.

- **Get User by ID**  
  `GET /users/:id` - Retrieves a user by ID.

- **Update User**  
  `PUT /users/:id` - Updates a user by ID.  
  **Body**: `{ "name": "New Name", "email": "new@example.com" }`

- **Delete User**  
  `DELETE /users/:id` - Deletes a user by ID.

## Models

- **Artist**: Represents a music artist with fields `name` and `biography`.
- **Genre**: Represents a genre of music with a `name` field.
- **Order**: Represents a customer's order with associated `userId` and items.
- **User**: Represents a user with `name`, `email`, and `password`.

## Error Handling

Standardized error handling is implemented with appropriate HTTP status codes:
- `400 Bad Request` - for validation errors.
- `404 Not Found` - for resources not found.
- `500 Internal Server Error` - for server errors.

## Environment Variables

This project uses environment variables to configure database connection, server settings, and other sensitive data. Add the following in a `.env` file:

```plaintext
SALT_ROUNDS=10
DATABASE_URL=your_database_url
```

## Contributing

Contributions are welcome! Please create a pull request with a clear description of changes.

## License

This project is licensed under the MIT License.

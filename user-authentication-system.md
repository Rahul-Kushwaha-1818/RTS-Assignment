# User Authentication System

## Project Overview

The **User Authentication System** is a basic Node.js application that provides user registration, login functionality, and displays all registered users. It uses JSON Web Tokens (JWT) for secure authentication and password hashing with bcrypt for enhanced security. The application interacts with a MongoDB database for data persistence.

---

## Features

1. **User Registration**: Enables new users to register by providing their name, email, phone number, and password.
2. **User Login**: Authenticates users using email and password and issues a JWT token for session management.
3. **Retrieve All Users**: Allows fetching the list of all registered users.

---

## Prerequisites

Before setting up the project, ensure the following software is installed:

- Node.js
- MongoDB
- Postman (for API testing)

---

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-authentication-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory with the following variables:

   ```env
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   PORT=5500
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The application will run on `http://localhost:5500`.

---

## Project Structure

```
user-authentication-system/
├── Controller/
│   ├── Controller.js
├── Model/
│   ├── UserModel/
│       ├── UserModel.js
├── db/
│   ├── ConnectDB.js
├── routes/
│   ├── Routes.js
├── .env
├── package.json
├── Server.js
```

### Key Files:

1. **Server.js**: Entry point of the application, initializes routes and middleware.
2. **ConnectDB.js**: Handles MongoDB connection.
3. **Routes.js**: Defines API routes for login, registration, and fetching users.
4. **Controller.js**: Contains business logic for login, registration, and retrieving users.
5. **UserModel.js**: Defines the MongoDB schema and model for user data.

---

## API Endpoints

### Base URL

`http://localhost:5500/api/RTS-Assignment`

### 1. Register User

- **Endpoint**: `/user-register`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully!"
  }
  ```

### 2. Login User

- **Endpoint**: `/user-login`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful!",
    "token": "Bearer <JWT token>"
  }
  ```

### 3. Get All Users

- **Endpoint**: `/All-User`
- **Method**: GET
- **Response**:
  ```json
  [
    {
      "_id": "<user-id>",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "1234567890",
      "password": "<hashed-password>"
    }
  ]
  ```

---

## Security Measures

1. **Password Hashing**: User passwords are hashed using bcrypt before saving to the database.
2. **JWT Authentication**: Tokens are generated during login to ensure secure session management.
3. **Environment Variables**: Sensitive data such as the MongoDB URI and JWT secret are stored securely in the `.env` file.

---

## Future Enhancements

1. **Role-Based Access Control**: Implement user roles (e.g., admin, user) for enhanced security.
2. **Password Reset**: Add functionality for users to reset their passwords via email.
3. **User Profile Management**: Allow users to update their profile information.
4. **Pagination**: Implement pagination for the user list to handle large datasets.

---

## Testing the APIs

Use **Postman** or similar tools to test the endpoints:

1. **Start the server**: Ensure the server is running on `http://localhost:5500`.
2. **Register a new user**: Send a POST request to `/api/RTS-Assignment/user-register` with user details.
3. **Login as the user**: Send a POST request to `/api/RTS-Assignment/user-login` with the email and password.
4. **Fetch all users**: Send a GET request to `/api/RTS-Assignment/All-User`.

---

## Conclusion

The **User Authentication System** is a foundational application demonstrating secure authentication practices using Node.js, MongoDB, and JWT. Its modular structure allows for easy scaling and addition of features in the future.

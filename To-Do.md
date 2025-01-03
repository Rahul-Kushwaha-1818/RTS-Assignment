Here's a detailed documentation for the **To-Do List API** based on your provided reference for the User Authentication System:

---

# To-Do List API Documentation

## Project Overview

The **To-Do List API** is a basic Node.js application that allows users to manage their tasks. Users can add, update, delete, and retrieve tasks. The application uses MongoDB for data persistence and features a RESTful API that supports CRUD operations on to-do tasks.

---

## Features

1. **Create Task**: Allows users to add a new task with a title and description.
2. **Update Task**: Allows users to update the title, description, and completion status of a task.
3. **Delete Task**: Allows users to delete a task from the to-do list.
4. **Retrieve All Tasks**: Fetches the list of all tasks stored in the database.

---

## Prerequisites

Before setting up the project, ensure the following software is installed:

- **Node.js**
- **MongoDB**
- **Postman** (for API testing)

---

## Project Setup

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd todo-list-api
```

### 2. Install Dependencies

Inside the project directory, install the required dependencies using npm:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGODB_URI=<your-mongodb-uri>
PORT=5500
```

- **MONGODB_URI**: The MongoDB connection string. You can use a local instance or MongoDB Atlas for this.
- **PORT**: The port on which the server will run. By default, it's set to `5500`.

### 4. Start the Server

Once the environment variables are configured, start the server by running:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5500`.

---

## Project Structure

```
todo-list-api/
├── Controller/
│   ├── TodoController.js
├── Model/
│   ├── TodoModel/
│       ├── TodoModel.js
├── db/
│   ├── ConnectDB.js
├── routes/
│   ├── TodoRoutes.js
├── .env
├── package.json
├── Server.js
```

### Key Files:

1. **Server.js**: Entry point of the application, which initializes routes and middleware.
2. **ConnectDB.js**: Handles the MongoDB connection setup.
3. **TodoRoutes.js**: Defines the API routes for adding, updating, deleting, and retrieving tasks.
4. **TodoController.js**: Contains business logic for CRUD operations on tasks.
5. **TodoModel.js**: Defines the MongoDB schema for the tasks.

---

## API Endpoints

### Base URL

`http://localhost:5500/api/todo`

### 1. Create Task

- **Endpoint**: `/create-task`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "title": "Buy Groceries",
    "description": "Buy vegetables and fruits from the market"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task created successfully!"
  }
  ```

### 2. Update Task

- **Endpoint**: `/task/{id}`
- **Method**: PATCH
- **Request Body**:
  ```json
  {
    "title": "Buy Groceries and Drinks",
    "description": "Buy vegetables, fruits, and soft drinks",
    "status": "completed"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task updated successfully!"
  }
  ```

### 3. Delete Task

- **Endpoint**: `/task/{id}`
- **Method**: DELETE
- **Response**:
  ```json
  {
    "message": "Task deleted successfully!"
  }
  ```

### 4. Get All Tasks

- **Endpoint**: `/tasks`
- **Method**: GET
- **Response**:
  ```json
  [
    {
      "_id": "<task-id>",
      "title": "Buy Groceries",
      "description": "Buy vegetables and fruits from the market",
      "status": "pending"
    }
  ]
  ```

---

## Security Measures

1. **Password Hashing**: Though this API doesn't include authentication, if you plan to add user management, use bcrypt to hash passwords.
2. **MongoDB Security**: Ensure your MongoDB instance is secured, especially if you're using a hosted MongoDB service like MongoDB Atlas.
3. **Environment Variables**: Sensitive data such as the MongoDB URI are stored securely in the `.env` file.

---

## Future Enhancements

1. **User Authentication**: Add JWT-based authentication to restrict task management to authenticated users.
2. **Task Categories**: Allow users to categorize tasks (e.g., "Personal", "Work", etc.).
3. **Due Dates and Reminders**: Add support for task due dates and reminders.
4. **Pagination**: Implement pagination for listing tasks when there are a large number of entries.

---

## Testing the APIs

Use **Postman** or similar tools to test the endpoints:

1. **Start the server**: Ensure the server is running on `http://localhost:5500`.
2. **Create a task**: Send a POST request to `/api/todo/create-task` with task details.
3. **Update a task**: Send a PATCH request to `/api/todo/task/{id}` with the task ID and updated data.
4. **Delete a task**: Send a DELETE request to `/api/todo/task/{id}` with the task ID.
5. **Fetch all tasks**: Send a GET request to `/api/todo/tasks` to retrieve the list of tasks.

---

## Conclusion

The **To-Do List API** is a simple application that demonstrates the basic functionality of creating, updating, deleting, and retrieving tasks. The modular structure allows for easy additions and customization. You can enhance this API by adding user authentication, task categories, and due dates.

---

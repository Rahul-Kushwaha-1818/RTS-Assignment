# CRUD Application for Station Management

## Project Overview

This project is a CRUD (Create, Read, Update, Delete) application designed to manage station data. It allows users to perform the following operations:

- **Create** a new station with details like name, location, and type.
- **Read** or retrieve a list of all stations or a specific station by ID.
- **Update** station details using the `PATCH` method.
- **Delete** a station by ID.

The application is built using Node.js, Express.js, and MongoDB, following RESTful API principles.

---

## Project Structure

```
project-directory/
├── config/
│   └── db.js         # MongoDB connection setup
├── controllers/
│   └── Controller.js   # Contains logic for CRUD operations
├── models/
│   └── DataModel.js        # Mongoose schema for stations
├── routes/
│   └── Routes.js       # API routes
├── .env            # Environment variables (e.g., PORT, MongoDB URI)
├── server.js       # Main server entry point
└── package.json    # Project dependencies and scripts
```

---

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory with the following content:

   ```env
   PORT=5500
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the Server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5500`.

---

## API Endpoints

### Base URL: `http://localhost:5500/api/stations`

1. **Create a Station**

   - **Method**: `POST`
   - **Endpoint**: `/`
   - **Request Body**:
     ```json
     {
       "name": "Station Name",
       "location": "Station Location",
       "type": "Station Type"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Station created successfully!",
       "station": { ...stationData }
     }
     ```

2. **Get All Stations**

   - **Method**: `GET`
   - **Endpoint**: `/`
   - **Response**:
     ```json
     [
       { ...stationData },
       { ...stationData }
     ]
     ```

3. **Get a Station by ID**

   - **Method**: `GET`
   - **Endpoint**: `/:id`
   - **Response**:
     ```json
     { ...stationData }
     ```

4. **Update a Station**

   - **Method**: `PATCH`
   - **Endpoint**: `/:id`
   - **Request Body**:
     ```json
     {
       "name": "Updated Station Name",
       "location": "Updated Location"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Station updated successfully!",
       "station": { ...updatedStationData }
     }
     ```

5. **Delete a Station**
   - **Method**: `DELETE`
   - **Endpoint**: `/:id`
   - **Response**:
     ```json
     {
       "message": "Station deleted successfully!"
     }
     ```

---

## Running the Project

1. Ensure MongoDB is running locally or that you have a valid cloud MongoDB URI in the `.env` file.
2. Start the server using `npm start`.
3. Use a tool like Postman to test the API endpoints:
   - Set the base URL to `http://localhost:5500/api/stations`.
   - Test each endpoint using the methods and request bodies described above.

---

## Features

- Full CRUD functionality for station management.
- Input validation and error handling for API requests.
- Secure password handling for any user-related extensions.
- Responsive and scalable API structure.

---

## Future Enhancements

- Implement user authentication and role-based access control.
- Add search and filter functionality for stations.
- Improve error handling with detailed error codes and messages.

---

## Dependencies

- Node.js
- Express.js
- Mongoose
- dotenv
- bcrypt (optional for password handling)

---

## Contact

For further details or questions about the project, please contact:

- **Developer**: Rahul Kushwaha
- **Email**: rkushwaha1818@gmail.com

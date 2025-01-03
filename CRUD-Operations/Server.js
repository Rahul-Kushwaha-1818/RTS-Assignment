const express = require("express");
const connectDB = require("./db/ConnectDB");
const StationRoutes = require("./routes/Routes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/stations", StationRoutes);

// This is for just Testing
app.get("/", (req, res) => {
  res.send("Welcome to the Stations API!");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

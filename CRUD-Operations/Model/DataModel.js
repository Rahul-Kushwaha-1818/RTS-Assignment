const mongoose = require("mongoose");

// this is my modal for Data
const StationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    default: "Delhi",
  },
  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Station", StationSchema);

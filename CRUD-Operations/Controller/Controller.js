const Station = require("../Model/DataModel");

// This code for Create a new
const createStation = async (req, res) => {
  const { name, location, capacity } = req.body;
  try {
    const newStation = new Station({ name, location, capacity });
    await newStation.save();
    res
      .status(201)
      .json({ message: "Station created successfully", newStation });
  } catch (error) {
    res.status(500).json({ message: "Failed to create station", error });
  }
};

// This code for Get all Data
const getAllStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.status(200).json(stations);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve stations", error });
  }
};

// This code for Get station by ID
const getStationById = async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.status(200).json(station);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve station", error });
  }
};

// Thsi Code for Update a station (partial update)
const updateStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.status(200).json({ message: "Station updated successfully", station });
  } catch (error) {
    res.status(500).json({ message: "Failed to update station", error });
  }
};

// Delete a station
const deleteStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndDelete(req.params.id);
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.status(200).json({ message: "Station deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete station", error });
  }
};

module.exports = {
  createStation,
  getAllStations,
  getStationById,
  updateStation,
  deleteStation,
};

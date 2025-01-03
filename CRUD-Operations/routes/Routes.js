const express = require("express");
const {
  createStation,
  getAllStations,
  getStationById,
  updateStation,
  deleteStation,
} = require("../Controller/Controller"); // here I get all the operation which perform on perticuler API

const router = express.Router();

// This code for get All the Data
router.get("/", getAllStations);

// This code for create new Data
router.post("/", createStation);

// This code for get Station by ID
router.get("/:id", getStationById);

// This code for Update the data and I am using PATCH for update the perticuler data only
router.patch("/:id", updateStation);

// this code for Delete by the ID
router.delete("/:id", deleteStation);

module.exports = router;

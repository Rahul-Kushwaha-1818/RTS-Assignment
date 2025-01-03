const express = require("express");
const route = express.Router();
const AllControler = require("../Controller/Controller"); // Here I get all the controller according to the API

// This API for Login
route.post("/user-login", AllControler.Login);

// This code for User Registration
route.post("/user-register", AllControler.Register);

// This code for get all th User Data
route.get("/All-User", AllControler.GetAllUsers);

module.exports = route;

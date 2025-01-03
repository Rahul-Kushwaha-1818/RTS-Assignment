const express = require("express");
const ConnectDB = require("./db/ConnectDB");
const Routes = require("./routes/Routes");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

dotenv.config(); // this is use to config the dotenv

ConnectDB(); // This is call for connection the Data base

app.use("/api/RTS-Assignment", Routes); // there are all the API

// This is the for test the SERVER
app.get("/", (req, res) => {
  res.send(
    "Welcome!, the API for all process have diff.. please check it and then try to run"
  );
});

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

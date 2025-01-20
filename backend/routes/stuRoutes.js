const express = require("express");
const route = express.Router();
const StuController = require("../controller/stuController");
route.post("/datasave", StuController.DataSave)
route.get("/displaydata", StuController.DataDisplay)
module.exports = route;
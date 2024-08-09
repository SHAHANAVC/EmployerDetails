// import mongoose
const db = require("mongoose");
//  connecting to database
db.connect("mongodb://localhost:27017/EMS");
const employee = db.model("Employe", {
  id: String,
  name: String,
  age: Number,
  designation: String,
  salary: Number,
});
module.exports = { employee };

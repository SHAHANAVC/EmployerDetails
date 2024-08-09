// express import
const express = require("express");
// import cors
const cors = require("cors");

const database = require("./services/db");
// logic.js import
const logic = require("./services/logic");

// calling express in to variable server
const server = express();
// for front end connection install npm i cors
// front end connection establish
server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// server run using .listen(localhost,)

server.listen(5000, () => {
  console.log("server start");
});

server.use(express.json());
//  requst response
server.get("/allemployee", (req, res) => {
  logic.allEmployes().then((result) => {
    res.status(result.statusCode).json(result);
  });
});
// add employee
server.post("/addepmloyee", (req, res) => {
  console.log(req.body);

  logic
    .addEmployes(
      req.body.id,
      req.body.name,
      req.body.age,
      req.body.designation,
      req.body.salary
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

// delete
server.delete("/delete/:id", (req, res) => {
  logic.deleteEmp(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

// edit employee
server.get("/oneEmp/:id", (req, res) => {
  logic.oneEmp(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
// UPDATE EMPLOYEEE
server.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.ename;
  const age = req.body.age;
  const designation = req.body.desig;
  const salary = req.body.salary;
  console.log(req.body);

  logic.updateEmp(id, name, age, designation, salary).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

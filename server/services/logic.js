// to get all employees

const database = require("./db");
const allEmployes = () => {
  return database.employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employedata: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No data found",
      };
    }
  });
};
// add employees
const addEmployes = (id, name, age, designation, salary) => {
  return database.employee.findOne({ name: name }).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "employee already exist",
      };
    } else {
      const newEmploye = new database.employee({
        // pass to database
        id,
        name,
        age,
        designation,
        salary,
      });

      newEmploye.save();
      return {
        statusCode: 200,
        message: "succesfully completed",
      };
    }
  });
};

// delete employee
const deleteEmp = (param_id) => {
  return database.employee.deleteOne({ id: param_id }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        message: "succesfully deleted",
      };
    } else {
      return {
        statusCode: 400,
        message: "data not found",
      };
    }
  });
};

// edit employee
const oneEmp = (id) => {
  return database.employee.findOne({ id: id }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employedata: result,
      };
    } else {
      return {
        statusCode: 400,
        message: "not found",
      };
    }
  });
};
// update employee
const updateEmp = (id, name, age, designation, salary) => {
  return database.employee
    .updateMany(
      { id: id },
      {
        $set: {
          name: name,
          age: age,
          designation: designation,
          salary: salary,
        },
      }
    )
    .then((result) => {
      if (result) {
        return {
          statusCode: 200,
          message: "succesfully copmleted",
        };
      } else {
        return {
          statusCode: 400,
          message: "no data found",
        };
      }
    });
};
module.exports = {
  allEmployes,
  addEmployes,
  deleteEmp,
  oneEmp,
  updateEmp,
};

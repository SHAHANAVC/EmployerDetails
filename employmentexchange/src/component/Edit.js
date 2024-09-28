import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  // function for edit
  const navigate = useNavigate()
  const {id} = useParams();
  const [ename, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [desig, setDesig] = useState([]);
  const [salary, setSalary] = useState([]);


  const editEmployee = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/oneEmp/${id}`
    );
    setName(data.employedata.name);
    setAge(data.employedata.age);
    setDesig(data.employedata.designation);
    setSalary(data.employedata.salary);
  };

  const updateEmployee = async (event) => {
    event.preventDefault();

    try {
      const emplo = await axios.put(`http://localhost:5000/update`, {
        id,
        ename,
        age,
        desig,
        salary,
      });
      navigate("/");
      console.log(emplo);
      alert(emplo.data.message)
      
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    editEmployee();
  }, []);

  return (
    <>
      <Form className="mt-5 w-50 m-auto" onSubmit={updateEmployee}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            NAME
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              value={ename}
              onChange={(event) => setName(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            DESIGNAION
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              value={desig}
              onChange={(e) => setDesig(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            AGE
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            SALARY
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <div className="text-center mt-2">
            <Button
              variant="success"
              className="p-2"
              style={{ width: "170px" }}
              type="submit"
            >
              SAVE
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default Edit;

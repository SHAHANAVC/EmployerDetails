import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const [empdata, setData] = useState([0]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/allemployee");
    console.log(data);
    setData(data.employedata);
  };
  // function for delete
  const deleteEmp = async (id) => {
    const emp = await axios.delete(`http://localhost:5000/delete/${id}`);
    alert("succesfully deleted")
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="text-center mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> AGE</th>
              <th>DESIGNAION</th>
              <th>SALARY</th>
            </tr>
          </thead>
          <tbody>
            {empdata.map((a) => (
              <tr key={a._id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.designation}</td>
                <td>{a.salary}</td>
                <td>
                  <Link to={`/edit/${a.id}`}>
                    {/* {" "} */}
                    <Button variant="primary"><i class="bi bi-pencil-square"></i> EDIT</Button>
                  </Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteEmp(a.id)}>
                  <i class="bi bi-trash3-fill"></i> DELETE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;

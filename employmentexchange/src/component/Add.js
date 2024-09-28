import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// install react uuid
import uuid from "react-uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
   const [id,setempId]=useState("")
   const [name,setEmpname]=useState("")
   const [age,setEmpAge] = useState()
   const [designation,setDesignation] = useState("")
   const [salary,setSalary] = useState(0)
   const navigate = useNavigate()

    useEffect (()=>{
      setempId(uuid().slice(0,4))
    },[])
   const addEmp = async(event)=>{
          const body = {id,name,age,designation,salary}
          console.log(body);
        try{
           const result=await axios.post("http://localhost:5000/addepmloyee",body)
          alert(result.data.message);
          navigate('/')
        }
        catch(error){
          console.log("error");
        }      
   }
  return (
    <>
      <div>
      <Form   className="mt-5 w-50 m-auto">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          NAME
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="NAME OF EMPLOYEE" onChange={(event)=>setEmpname(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          AGE
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="AGE"  onChange={(event)=>setEmpAge(event.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          DESIGNAION
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="designation"  onChange={(event)=>setDesignation(event.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          SALARY
        </Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="SALARY"  onChange={(event)=>setSalary(event.target.value)}/>
        </Col>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
      <div className='text-center mt-2'> 
        <Button onClick={((event)=>{addEmp(event)})} variant="success" className='p-2' style={{width:"170px"}}>SAVE</Button>  
        </div>
        </Form.Group>
            </Form>
      </div>
    </>
  );
}

export default Add;

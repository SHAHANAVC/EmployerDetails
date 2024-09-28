import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";

function Header() {
  return (
    <>
   
      <Container fluid className="p-0">
      <Navbar bg="primary" expand="lg" className="w-100" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <i className="bi bi-bank"></i> <span className="ms-2">EMPLOYMENT-EXCHANGE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/addnew" className="d-flex align-items-center">
                <Button variant="secondary" className="p-2 mt-1 d-flex align-items-center">
                  <i className="bi bi-person-plus me-2"></i> ADD NEW
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
    </>
  );
}

export default Header;

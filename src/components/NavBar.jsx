import React from "react";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-2">
      <Navbar.Brand href="/">JobSearch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form className="d-flex" style={{ marginLeft: "auto" }}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button
            variant="outline-success"
            style={{ display: "inline", marginLeft: 10 }}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

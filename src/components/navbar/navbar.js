import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand >Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to='/'>
        <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/sobre">
        <Nav.Link href="#link">Link</Nav.Link>
        </Link>
      </Nav>
      <Dropdown className="mr-sm-2 dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sobre nós
          </Dropdown.Toggle>

          <Dropdown.Menu >
          <Link to="/quem-somos">
            <Dropdown.Item href="#/action-1" className="dropdown">QUEM SOMOS</Dropdown.Item>
            </Link>
            <Link to="/como-funciona">
            <Dropdown.Item href="#/action-2" className="dropdown">COMO FUNCIONA</Dropdown.Item>
            </Link>
            <Dropdown.Item href="#/action-3" className="dropdown">EQUIPE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
   
      <Form inline>
        <FormControl type="text" placeholder="O que você quer aprender?" className="mr-sm-2 " />
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}


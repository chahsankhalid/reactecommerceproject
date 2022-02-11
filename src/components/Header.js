import React from "react"
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import Login from './buttons/Login';
import Signup from "./buttons/Signup";
import Cart from "./buttons/Cart";
const Header = () => {
    return (
        <div>
          <Navbar bg="light" expand="lg" >
  <Container>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav ">
      <Nav className="me-auto navbar-wrapper">
        <Link to="/">Home</Link>
        <Link to="/about">About </Link>
       <Link to="/contact">Contact</Link>
       <Link to="/product">Product</Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home">Mart</Navbar.Brand>
    <Login />
    <Signup />
    <Cart />
  </Container>
</Navbar>
        </div>
    )
}

export default Header
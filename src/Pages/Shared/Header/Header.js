import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";
const Header = () => {
  const { users, handleGoogleSignOut } = useAuth();

  return (
    <div className="header-section">
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="/home" className="text-white ">
            <Slide top>
              <h2>Drone-World</h2>
            </Slide>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto navigation-section">
              <Link to="/home">Home</Link>
              <Link to="/about">About Us </Link>
              <Link to="/shop">Shop</Link>
              <Link to="/contact">Contact Us</Link>
            </Nav>
            <Nav className="navigation-section">
              {users.email ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link onClick={handleGoogleSignOut} to="/home">
                    Log out
                  </Link>
                  <h4 className="text-warning text-center">
                    {users.displayName}
                  </h4>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

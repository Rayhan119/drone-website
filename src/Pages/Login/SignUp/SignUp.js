import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./SignUp.css";
const SignUp = () => {
  const {
    getName,
    getImage,
    signUpEmailPassword,
    getEmail,
    getPassword,
    setLoading,
    setUsers,
    formSubmit,
    updateNameAndImage,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  const handlePasswordSignIn = () => {
    signUpEmailPassword()
      .then((result) => {
        updateNameAndImage();
        setUsers(result.user);
        history.push(redirect);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <div className="main-form-section shadow p-3 mb-5 bg-body rounded">
            <h1>Please Sign Up</h1>
            <div className="login-form-section">
              <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={getName}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={getImage}
                    type="text"
                    placeholder="Enter Your Photo url"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={getEmail}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onBlur={getPassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div className="login-form-btn">
                  <Button onClick={handlePasswordSignIn} type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>

              <hr />
              <p className="mt-2 text-center toggle-link-style">
                <NavLink className="text-decoration-none" to="/login">
                  Already have an account? <span>Please Log In</span>
                </NavLink>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

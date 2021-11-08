import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useContexts from "./../hooks/useContexts.js";

const SignUp = () => {
  const { authInfo } = useContexts();
  const { newUser, setNewUser, registerUser } = authInfo;

  function inputChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    const extractedUser = { ...newUser };
    extractedUser[name] = value;
    setNewUser(extractedUser);
  }

  function registerHandaler(e) {
    registerUser();
    e.target.reset();
    e.preventDefault();
  }

  return (
    <>
      <Container
        style={{
          height: "calc(100vh - 56px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center">Register Now</h2>
          <Form
            onSubmit={registerHandaler}
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                onChange={inputChangeHandler}
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                onChange={inputChangeHandler}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                onChange={inputChangeHandler}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                required
                onChange={inputChangeHandler}
                name="photoUrl"
                type="text"
                placeholder="Enter your photo url"
              />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <p className="text-center mt-2">
            Already registered? <Link to="/login">Login now</Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default SignUp;

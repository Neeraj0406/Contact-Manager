import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import axios from "axios";

const AddContact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addList = async () => {
    await axios.post("http://localhost:8000/user", user);
    navigate("/");
  };

  return (
    <>
      <h1 className="heading">Contact Manager </h1>
      <Link to="/">
        <Button variant="outline-primary">Back to Home</Button>{" "}
      </Link>
      <hr />
      <div className="container col-lg-6  border mt-5 p-4">
        <Form className=" ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={user.name}
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number"
              name="phone"
              value={user.phone}
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Button variant="primary" onClick={addList}>
            Add Contact
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddContact;

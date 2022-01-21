import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const UpdateContact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateList = async () => {
    await axios.put(`http://localhost:8000/user/${id}`, user);
    navigate("/");
  };

  const loadData = async () => {
    const response = await axios.get(`http://localhost:8000/user/${id}`, user);
    setUser(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className="heading">Contact Manager </h1>
      <Link to="/">
        <Button variant="outline-primary">Back to Home</Button>{" "}
      </Link>
      <hr />

      <Form className="mt-5">
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
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            name="phone"
            value={user.phone}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Button variant="primary" onClick={updateList}>
          Update Contact
        </Button>
      </Form>
    </>
  );
};

export default UpdateContact;

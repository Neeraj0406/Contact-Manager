import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import "./Home.css";
import { Button, Table } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/user");
    setUser(response.data.reverse());
  };

  useEffect(() => {
    loadData();
  }, []);

  const delteContact = async (id) => {
    await axios.delete(`http://localhost:8000/user/${id}`);
    loadData();
  };

  return (
    <>
      <h1 className="heading">Contact Manager</h1>
      <hr />
      <div className="header ">
        <h2> Contact List </h2>
        <Link to="/addContact">
          {" "}
          <Button variant="outline-primary  ">Add Contact</Button>{" "}
        </Link>
      </div>{" "}
      <hr />
      {user.length > 0 ? (
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th> </th>
              </tr>
            </thead>
            {user.map((value, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>
                      <Button variant="outline-primary" className="func_btn">
                        <Link className="update_btn" to={`/user/${value.id}`}>
                          {" "}
                          Update
                        </Link>{" "}
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="func_btn"
                        onClick={() => delteContact(value.id)}
                      >
                        {" "}
                        Delete{" "}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      ) : (
        <h4 className="text-center"> No Contact Found </h4>
      )}
    </>
  );
};

export default Home;

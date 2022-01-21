import React from "react";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import { Routes, Route } from "react-router-dom";
import UpdateContact from "./components/UpdateContact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addContact" element={<AddContact />} />
        <Route exact path="/user/:id" element={<UpdateContact />} />
      </Routes>
    </>
  );
};

export default App;

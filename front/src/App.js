import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import AdminSubmit from "./views/AdminSubmit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/adminSubmit" element={<AdminSubmit />}></Route>
      </Routes>
    </>
  );
}

export default App;

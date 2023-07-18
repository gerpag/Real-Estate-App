import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";

import AdminSubmit from "./views/AdminSubmit";

import { useDispatch } from "react-redux";
import { setUser } from "../src/state/user";
import Property from "./views/Property";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(null));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/adminSubmit" element={<AdminSubmit />}></Route>
        <Route path="/property" element={<Property />}></Route>
      </Routes>
    </>
  );
}

export default App;

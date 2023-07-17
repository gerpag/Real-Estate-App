import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import { useDispatch } from "react-redux";
import { setUser } from "../src/state/user";

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
      </Routes>
    </>
  );
}

export default App;

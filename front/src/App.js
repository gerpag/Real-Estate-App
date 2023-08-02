import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
//import { useEffect } from "react";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";

import AdminSubmit from "./views/AdminSubmit";

// import { useDispatch } from "react-redux";
// import { setUser } from "../src/state/user";
import Property from "./views/Property";
import Venta from "./views/Ventas";
import Alquiler from "./views/Alquiler";
import AllUser from "./views/AllUser";
import MyProfile from "./views/MyProfile";
import PropertyDetails from "./views/PropertyDetails";
import Background from "./components/BackGround";
import Appointments from "./views/Appointment";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouterAdmin";
function App() {
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setUser(null));
  // }, []);
  return (
    <>
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/property/:id" element={<PropertyDetails />}></Route>
        <Route path="/venta" element={<Venta />}></Route>
        <Route path="/alquiler" element={<Alquiler />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<MyProfile />}></Route>
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/allUser" element={<AllUser />}></Route>
          <Route path="/adminSubmit" element={<AdminSubmit />}></Route>
          <Route path="/property" element={<Property />}></Route>
          <Route path="/appointments" element={<Appointments />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

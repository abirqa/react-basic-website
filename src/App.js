import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

const App = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/about"} element={<About />}></Route>
      <Route path={"/services"} element={<Services />}></Route>
      <Route path={"/gallery"} element={<Gallery />}></Route>
      <Route path={"/contact"} element={<Contact />}></Route>
    </Routes>
  );
};

export default App;

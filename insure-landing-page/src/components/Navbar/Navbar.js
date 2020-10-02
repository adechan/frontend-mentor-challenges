import React from "react";
import Footer from "../Footer/Footer";
import NavbarWork from "../NavbarWork/NavbarWork";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavbarWork />
      <Footer />
    </div>
  );
}

export default Navbar;

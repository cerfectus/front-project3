import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";

const Navigation = () => (
  <Navbar expand="md" className="stick-nav">
    <NavbarBrand href="/home">Home</NavbarBrand>
    <NavbarBrand href="/Profile">Profile</NavbarBrand>
    <NavbarBrand href="/api/posts">Games</NavbarBrand>
    <NavbarBrand href="/maps">Maps</NavbarBrand>
    <NavbarBrand href="/click">Maps</NavbarBrand>


  </Navbar>
);

export default Navigation;

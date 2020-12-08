import React from "react";
import Header from "./Header";
import logo from '../assets/my-logo.png';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" >
        <img
          className="logo"
          src={logo}
          width="100"
          height="90"
          alt="Logo"
          loading="lazy"
        />
      </a>
      <Header />
    </nav>
  );
}

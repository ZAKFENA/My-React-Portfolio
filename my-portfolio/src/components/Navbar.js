import React from "react";
import Header from "./Header";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/about">
        <img
          className="logo"
          src="/my-logo.png"
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

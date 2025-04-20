import React from "react";
import { Navbar, Container, Button, Image } from "react-bootstrap";
import logo from "../assets/1.jpg";

function Header() {
  return (
    <Navbar  expand="lg" style={{ backgroundColor: "#57648C" }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <Image
            src={logo}
            roundedCircle
            alt="Logo"
            style={{ width: "30px", height: "30px", objectFit: "cover" }}
          />
          <h6 className="mb-0 text-light" style={{ color: "#872642" }}>Blank</h6>
        </Navbar.Brand>
        <div className="d-flex gap-2">
          <button className="btn text-light" style={{ backgroundColor: "#872642" }}>
            Login
          </button>

          <a href="/register" className="btn text-light" style={{ backgroundColor: "#872642" }}>
          Register
          </a>

        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

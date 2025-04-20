import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import logo from "../assets/1.jpg";

function Header() {
  return (
    <Navbar expand="lg" className="shadow-sm"  style={{ backgroundColor: "#f5f5f5" }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2 mb-0">
          <Image
            src={logo}
            roundedCircle
            alt="Logo"
            style={{ width: "30px", height: "30px", objectFit: "cover" }}
          />
          <span className="fw-bold" style={{ color: "#872642", fontSize: "1.1rem" }}>
            Blank
          </span>
        </Navbar.Brand>

        <div className="d-flex gap-2">
          <a href="/login" className="btn btn-sm text-light" style={{ backgroundColor: "#872642" }}>
            Login
          </a>
          <a href="/register" className="btn btn-sm text-light" style={{ backgroundColor: "#872642" }}>
            Register
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

import React from 'react';

function Footer() {
  return (
    // Footer
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Copyright */}
      <div
        className="p-4 d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div style={{ color: "#872642" }}>
          © 2025 Copyright:&nbsp;
          <a className="fw-bold" style={{ color: "#872642" }} href="\">
            Blank
          </a>
        </div>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;

import React from 'react';

function Footer() {
  return (
    // Footer
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Copyright */}
      <div
        className="text-light p-4 d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundColor: "#57648C" }}
      >
        <div>
          © 2025 Copyright:&nbsp;
          <a className="text-light fw-bold" href="\">
            Blank
          </a>
        </div>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;

import React from 'react';
import logo from "../assets/1.jpg";

function IntroPost() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 text-center mb-4 mb-lg-0">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid shadow"
            style={{
              width: "250px",
              height: "250px", // Ensures the image is square
              objectFit: "cover", // Ensures the image fills the square without stretching
              borderRadius: "10px", // Optional: Adds slight rounded corners
            }}
          />
        </div>

        <div className="col-lg-6">
          <h4 className="mb-3" style={{color: "#872642" }}>React</h4>
          <h3 className="display-3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <h6 className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quam! Vel sint, quibusdam in doloremque temporibus eius culpa provident amet laborum illo illum asperiores esse perspiciatis totam? Esse, natus dolorum!
          </h6>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;

import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      setMessage("All fields are required.");
      setIsError(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      setIsError(true);
      return;
    }

    // Start loading state
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/users/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      setMessage("Registered successfully!");
      setIsError(false);
      setFormData({ email: "", username: "", password: "", confirmPassword: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed.");
      setIsError(true);
    } finally {
      // Stop loading state
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
            <h5 className="text-center py-3 mb-0" style={{ color: "#872642", fontWeight: "600" }}>
              Join Blank Community
            </h5>
            <div className="card-body px-4 py-3">
              {message && (
                <div className={`alert ${isError ? "alert-danger" : "alert-success"}`} role="alert">
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label" style={{ color: "#872642" }}>Email</label>
                  <input
                    type="email"
                    className="form-control rounded-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" style={{ color: "#872642" }}>Username</label>
                  <input
                    type="text"
                    className="form-control rounded-2"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" style={{ color: "#872642" }}>Password</label>
                  <input
                    type="password"
                    className="form-control rounded-2"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#872642" }}>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control rounded-2"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn text-light rounded-2" 
                    style={{ backgroundColor: "#872642" }}
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? (
                      <span>Loading...</span> // You can replace this with a spinner
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

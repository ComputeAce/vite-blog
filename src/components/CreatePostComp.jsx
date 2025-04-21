import React, { useState } from "react";
import axios from "axios";

function CreatePostComp() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    contents: "",
    image: null,
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("contents", formData.contents);
    data.append("image", formData.image);

    try {
      const response = await axios.post("http://localhost:8000/api/posts/create", data);
      setMessage("Post created successfully!");
      setIsError(false);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm rounded-3" style={{ backgroundColor: "#f5f5f5" }}>
            <h5 className="text-center py-3 mb-0" style={{ color: "#872642", fontWeight: "600" }}>
              Create Post
            </h5>
            <div className="card-body px-4 py-3">
              {message && (
                <div className={`alert ${isError ? "alert-danger" : "alert-success"}`} role="alert">
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label" style={{ color: "#872642" }}>Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="title" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" style={{ color: "#872642" }}>Category</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="category" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" style={{ color: "#872642" }}>Contents</label>
                  <textarea 
                    className="form-control" 
                    name="contents" 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#872642" }}>Image</label>
                  <input 
                    type="file" 
                    className="form-control" 
                    name="image" 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn text-light" 
                    style={{ backgroundColor: "#872642" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Create Post"}
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

export default CreatePostComp;

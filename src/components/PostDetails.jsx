import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import fallbackImage from "../assets/1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PostDetails() {
 
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    GlobalApi.getPostById(id)
      .then(res => setPost(res.data))
      .catch(err => {
        console.error("Error loading post:", err);
        setError("Post not found.");
      });
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    GlobalApi.deletePostById(id)
      .then(() => {
        toast.success("Post deleted successfully!", {
          position: "top-right",
          autoClose: 2000,
          onClose: () => navigate("/"),
        });
      })
      .catch(err => {
        console.error("Failed to delete post:", err);
        toast.error("Failed to delete post.");
      });
  };

  if (error) return <div className="container my-5 text-center text-danger">{error}</div>;
  if (!post) return <div className="container my-5 text-center">Loading...</div>;

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <img
              src={
                post.image?.startsWith("http")
                  ? post.image
                  : `http://localhost:8000${post.image}`
              }
              alt="Banner"
              className="img-fluid w-100"
              style={{ maxHeight: "500px", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />

            <div className="p-4">
              <h2 className="fw-bold text-dark mb-3" style={{ color: "#872642" }}>
                {post.title}
              </h2>

              <p className="text-muted" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                {post.contents}
              </p>

              <div className="d-flex justify-content-between align-items-center bg-light p-3 mt-4 rounded">
                <div className="d-flex align-items-center">
                  <img
                    src={fallbackImage}
                    alt="Author"
                    className="rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-semibold text-dark">
                      {post.author || "Unknown Author"}
                    </h6>
                    <small className="text-muted">
                      <i className="fas fa-calendar-alt me-1"></i> {post.date || "N/A"}
                    </small>
                  </div>
                </div>
                {isAuthenticated ? (
                  <button
                    className="btn btn-sm text-light px-4"
                    style={{ backgroundColor: "#872642" }}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;

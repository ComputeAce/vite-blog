import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import photo from "../assets/1.jpg"; // Default image for author

function PostDetails() {
  const { id } = useParams(); 
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

  if (error) return <div className="container my-5 text-center text-danger">{error}</div>;
  if (!post) return <div className="container my-5 text-center">Loading...</div>;

  return (
<div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <img
              src={post.image?.startsWith("http") ? post.image : `http://localhost:8000${post.image}`}
              alt="Banner"
              className="img-fluid w-100"
              style={{ maxHeight: "500px", objectFit: "cover" }}
              onError={(e) => (e.target.src = fallbackImage)}
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
                    src={photo}
                    alt="Author"
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
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

                <button className="btn btn-sm text-light px-4" style={{ backgroundColor: "#872642" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;

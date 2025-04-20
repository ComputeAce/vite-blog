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
      <div className="row">
        {/* Banner Image */}
        <div className="col-lg-12 mb-4">
          <img
            src={post.image.startsWith("http") ? post.image : `http://localhost:8000${post.image}`}
            alt="Banner"
            className="img-fluid w-100 rounded shadow-lg"
            style={{
              maxHeight: "500px", // Adjusted for better quality
              objectFit: "cover", // Ensures aspect ratio is preserved
              borderRadius: "10px", // Optional: rounded corners for the image
            }}
            onError={(e) => e.target.src = 'path/to/default-image.jpg'}  // Fallback image
          />
        </div>

        {/* Title */}
        <div className="col-lg-12 mb-3">
          <h2 className="text-start fw-bold" style={{ color: "#872642" }}>
            {post.title}
          </h2>
        </div>

        {/* Post Content */}
        <div className="col-lg-12 mb-4">
          <div className="p-4 bg-white rounded shadow-sm">
            <p className="text-muted" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              {post.contents}
            </p>
          </div>
        </div>

        {/* Author */}
        <div className="col-lg-12">
          <div className="d-flex align-items-center bg-light p-3 rounded shadow-sm mt-4">
            <img
              src={photo} // Default author image
              alt="Author"
              className="rounded-circle me-3"
              style={{
                width: "45px", 
                height: "45px", 
                objectFit: "cover", // Ensures the profile image has a nice circular look
              }}
            />
            <div>
              <h6 className="mb-0 fw-semibold" style={{ color: "#333" }}>
                {post.author || "Unknown Author"}
              </h6>
              <small className="text-muted">
                <i className="fas fa-calendar-alt me-1"></i> {post.date || "N/A"}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;

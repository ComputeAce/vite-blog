import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GlobalApi from '../services/GlobalApi';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');  // Access the search query from URL

  useEffect(() => {
    getPosts();
  }, [searchQuery]);  // Re-fetch posts whenever the search query changes

  const getPosts = () => {
    setLoading(true);
    setError(null);

    GlobalApi.getPosts()
      .then(resp => {
        // If there's a search query, filter posts by title
        if (searchQuery) {
          const filteredPosts = resp.data.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setPosts(filteredPosts);
        } else {
          setPosts(resp.data);  // No query, show all posts
        }
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container my-5">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
          <div className="spinner"></div>
          Loading posts...
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-muted">No posts found.</div>
      ) : (
        <div className="row justify-content-center">
          {posts.map((post, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card shadow-sm h-100" style={{ backgroundColor: "#f5f5f5" }}>
                <img
                  src={post.image.startsWith("http") ? post.image : `http://localhost:8000${post.image}`}
                  className="card-img-top"
                  alt={post.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 style={{ color: "#872642" }}>{post.title}</h5>
                  <p className="card-text">{post.contents?.substring(0, 100)}...</p>
                </div>
                <div className="card-body">
                  <a href={`/post/${post.id}`} className="card-link" style={{ color: "#872642" }}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;

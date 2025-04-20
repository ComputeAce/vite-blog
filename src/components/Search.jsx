import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Optionally, you can validate the query with an API call if needed
      await axios.get(`http://localhost:8000/api/posts/search-post/${query}`);
      setError("");
      // Navigate to the blogs page with the search query
      navigate(`/blogs?search=${query}`);
    } catch (err) {
      setError("Post not found.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center text-white my-5">
      <div className="bg-opacity-50 p-5 rounded text-center w-75" style={{ backgroundColor: "#57648C" }}>
        <h1 className="mb-4">Find What You're Looking For</h1>
        <form className="d-flex justify-content-center" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control w-75 me-2"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-light">Search</button>
        </form>
        {error && <p className="mt-3 text-danger">{error}</p>}
      </div>
    </div>
  );
}

export default Search;

import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/posts';

const GlobalApi = {
  getPosts: () => axios.get(`${BASE_URL}/posts`),
  getPostById: (id) => axios.get(`${BASE_URL}/post/${id}`),
  deletePostById: (id) => axios.delete(`${BASE_URL}/delete-post/${id}`)
};

export default GlobalApi;

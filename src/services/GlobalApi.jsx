import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/posts';

const GlobalApi = {
  getPosts: () => axios.get(`${BASE_URL}/posts`),
  getPostById: (id) => axios.get(`${BASE_URL}/post/${id}`)
};

export default GlobalApi;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Blogs from './components/Blogs';
import PostView from './pages/PostView'; // Import your PostView component
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blogs', // Define the '/blogs' route
    element: <Blogs />, // This should render the BlogList component
  },
  {
    path: '/post/:id',
    element: <PostView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

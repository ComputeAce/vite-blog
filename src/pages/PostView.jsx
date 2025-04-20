// src/PostView.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostDetails from '../components/PostDetails';

function PostView() {
  return (
    <div>
        <Header/>
        <PostDetails/>
        <Footer/>   
    </div>
  );
}

export default PostView;
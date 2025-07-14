import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // External CSS

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUsername(user.name);
    }

    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/posts', {
          headers: { Authorization: token }
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div className="dashboard-container">
      {/* 🔼 Banner Image at Top */}
      <img src="/im/banner3.jpg" alt="Dashboard Banner" className="dashboard-banner" />

      {/* 🔷 Dashboard Header */}
      <div className="dashboard-header">
        <h2>📘 Welcome, {username || 'Eco Reader'}!</h2>
        <h3>📚 My EcoReads</h3>
      </div>

      {/* 🔽 Post List */}
      <div className="dashboard-posts">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post._id} className="post-card">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>

    
    </div>
  );
};

export default Dashboard;

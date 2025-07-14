import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TipsPage.css'; // external CSS

const TipsPage = () => {
  const [tips, setTips] = useState([]);
  const [text, setText] = useState('');
  const [addedBy, setAddedBy] = useState('');

  const fetchTips = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/tips');
      setTips(res.data);
    } catch (error) {
      console.error('Failed to fetch tips:', error.message);
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  const handleAddTip = async () => {
    if (!text || !addedBy) return alert('Please fill all fields');
    try {
      const res = await axios.post('http://localhost:3000/api/tips', { text, addedBy });
      setTips([res.data, ...tips]);
      setText('');
      setAddedBy('');
    } catch (error) {
      console.error('Failed to add tip:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/tips/${id}`);
      setTips(tips.filter(tip => tip._id !== id));
    } catch (error) {
      console.error('Failed to delete tip:', error.message);
    }
  };

  return (
    <div className="tips-container">
      <div className="tips-banner">
        <h1>🌍 Eco-Friendly Tips</h1>
        <p>Share and explore tips to protect our environment</p>
      </div>

      <div className="tip-inputs">
        <input
          type="text"
          placeholder="Enter a new tip..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name"
          value={addedBy}
          onChange={(e) => setAddedBy(e.target.value)}
        />
        <button onClick={handleAddTip}>Add Tip</button>
      </div>

      <ul className="tip-list">
        {tips.map((tip) => (
          <li key={tip._id} className="tip-item">
            <span>"{tip.text}" — <strong>{tip.addedBy}</strong></span>
            <button onClick={() => handleDelete(tip._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipsPage;

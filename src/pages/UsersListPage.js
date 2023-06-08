import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const UsersListPage = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://express-t4.onrender.com/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="users-list-container">
      <h1>Users List</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="users-grid">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            onClick={() => handleUserClick(user._id)}
            className="user-card"
          >
            <img src={user.picture} alt={user.name} className="user-image" />
            <p className="user-name">{`${user.name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersListPage;

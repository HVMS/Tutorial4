import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://express-t4.onrender.com/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="user-profile-container">
        <h2>User Profile</h2>
        <div className="user-profile-card">
          <div className="user-profile-image">
            <img src={user.picture} alt={user.name} />
          </div>
          <div className="user-profile-details">
            <p className="user-profile-name">{`${user.name}`}</p>
            <p className="user-profile-email">Email: {user.email}</p>
            <p className="user-profile-phone">Phone: {user.phone}</p>
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/users')}>Back to Users List</button>
    </div>
  );
};

export default UserProfilePage;

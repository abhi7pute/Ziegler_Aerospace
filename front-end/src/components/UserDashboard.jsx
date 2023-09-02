// frontend/src/components/UserDashboard.js

import React from 'react';

function UserDashboard({ user }) {
  return (
    <div className="user-dashboard">
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      {/* Add more user information here */}
      <button>Log Out</button>
    </div>
  );
}

export default UserDashboard;

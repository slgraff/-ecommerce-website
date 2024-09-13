import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/products">View Products</Link>
      <p>Welcome, Admin!</p>
    </div>
  );
}

export default AdminDashboard;

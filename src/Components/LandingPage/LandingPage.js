
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to User Ranking Services</h1>
      <p>Please select one of the following options:</p>
      <div className="button-container">
        <Link to="/create-user">
          <button>Create User</button>
        </Link>
        <Link to="/update-user">
          <button>Update User</button>
        </Link>
        <Link to="/current-data">
          <button>Current Data</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

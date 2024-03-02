import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route
import LandingPage from './Components/LandingPage/LandingPage';
import CreateUserForm from './Components/CreateUserForm/CreateUserForm';
import UpdateUserForm from './Components/UpdateUserForm/UpdateUserForm';
import CurrentDataPage from './Components/CurrentDataPage/CurrentDataPage';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your routes inside Routes */}
        <Route exact path="/" element={<LandingPage />} /> {/* Use element prop */}
        <Route path="/create-user" element={<CreateUserForm />} />
        <Route path="/update-user" element={<UpdateUserForm />} />
        <Route path="/current-data" element={<CurrentDataPage />} />
      </Routes>
    </Router>
  );
}

export default App;



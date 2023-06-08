import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UsersListPage from './pages/UsersListPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/users" element={<UsersListPage/>} />
          <Route exact path='/users/:id' element={<UserProfilePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

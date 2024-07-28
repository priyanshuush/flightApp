
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AdminPage from './components/AdminPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
      </Routes>
      <Routes>
        <Route path="/Admin" element={<AdminPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
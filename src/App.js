import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AdminComponent from './components/AdminComponent';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <HeaderComponent />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DashboardComponent />} />
            <Route path="/Admin" element={<AdminComponent />} />
          </Routes>
        </main>
      {/*   <FooterComponent /> */}
      </div>
    </Router>
  );
};

export default App;
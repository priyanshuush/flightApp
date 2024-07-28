
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../styles/HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" className="header-navbar">
      <Container>
        <Navbar.Brand href="/">Flight Status & Notifications</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FlightStatusComponent from './FlightStatusComponent';
import NotificationSettingsComponent from './NotificationSettingsComponent';
import '../styles/DashboardComponent.css';

const DashboardComponent = () => {
  return (
    <Container className="dashboard-container">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Flight Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <FlightStatusComponent />
        </Col>
        <Col md={6} className="mb-4">
          <NotificationSettingsComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardComponent;

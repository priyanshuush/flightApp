import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FlightUploadComponent from './FlightUploadComponent';
import FlightUpdateComponent from './FlightUpdateComponent';
import '../styles/AdminComponent.css';

const AdminComponent = () => {
  return (
    <Container className="admin-container">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Admin Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <FlightUploadComponent />
        </Col>
        <Col md={6} className="mb-4">
          <FlightUpdateComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminComponent;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { fetchFlights } from '../redux/slices/flightSlice';
import ApiService from '../services/ApiService';
import '../styles/AdminComponent.css';

const FlightUploadComponent = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    flightId: '',
    airline: '',
    status: '',
    departureGate: '',
    arrivalGate: '',
    scheduledDeparture: '',
    scheduledArrival: '',
    actualDeparture: '',
    actualArrival: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.addFlight(formData);
      dispatch(fetchFlights());
      setFormData({
        flightId: '',
        airline: '',
        status: '',
        departureGate: '',
        arrivalGate: '',
        scheduledDeparture: '',
        scheduledArrival: '',
        actualDeparture: '',
        actualArrival: ''
      });
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <Container className="admin-page-container">
      <Row>
        <Col>
          <h2>Add Flight</h2>
          <Form onSubmit={handleAddSubmit}>
            <Form.Group controlId="formFlightId">
              <Form.Label>Flight ID</Form.Label>
              <Form.Control
                type="text"
                name="flightId"
                value={formData.flightId}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAirline">
              <Form.Label>Airline</Form.Label>
              <Form.Control
                type="text"
                name="airline"
                value={formData.airline}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDepartureGate">
              <Form.Label>Departure Gate</Form.Label>
              <Form.Control
                type="text"
                name="departureGate"
                value={formData.departureGate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formArrivalGate">
              <Form.Label>Arrival Gate</Form.Label>
              <Form.Control
                type="text"
                name="arrivalGate"
                value={formData.arrivalGate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formScheduledDeparture">
              <Form.Label>Scheduled Departure</Form.Label>
              <Form.Control
                type="datetime-local"
                name="scheduledDeparture"
                value={formData.scheduledDeparture}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formScheduledArrival">
              <Form.Label>Scheduled Arrival</Form.Label>
              <Form.Control
                type="datetime-local"
                name="scheduledArrival"
                value={formData.scheduledArrival}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formActualDeparture">
              <Form.Label>Actual Departure</Form.Label>
              <Form.Control
                type="datetime-local"
                name="actualDeparture"
                value={formData.actualDeparture}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formActualArrival">
              <Form.Label>Actual Arrival</Form.Label>
              <Form.Control
                type="datetime-local"
                name="actualArrival"
                value={formData.actualArrival}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Flight
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FlightUploadComponent;

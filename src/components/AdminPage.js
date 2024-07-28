
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { fetchFlights } from '../redux/slices/flightSlice';
import ApiService from '../services/ApiService';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((state) => state.flights);

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    flight_id: '',
    airline: '',
    status: '',
    departure_gate: '',
    arrival_gate: '',
    scheduled_departure: '',
    scheduled_arrival: '',
    actual_departure: '',
    actual_arrival: ''
  });

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const flightOptions = flights.map(flight => ({
    value: flight.flight_id,
    label: `${flight.flight_id} - ${flight.airline}`
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFlightSelect = (selectedOption) => {
    setSelectedFlight(selectedOption);
    if (selectedOption) {
      const flight = flights.find(f => f.flight_id === selectedOption.value);
      setFormData({
        flight_id: flight.flight_id,
        airline: flight.airline,
        status: flight.status,
        departure_gate: flight.departure_gate,
        arrival_gate: flight.arrival_gate,
        scheduled_departure: flight.scheduled_departure,
        scheduled_arrival: flight.scheduled_arrival,
        actual_departure: flight.actual_departure,
        actual_arrival: flight.actual_arrival
      });
      setShowModal(true);
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.addFlight(formData);
      dispatch(fetchFlights());
      setFormData({
        flight_id: '',
        airline: '',
        status: '',
        departure_gate: '',
        arrival_gate: '',
        scheduled_departure: '',
        scheduled_arrival: '',
        actual_departure: '',
        actual_arrival: ''
      });
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.updateFlight(formData);
      dispatch(fetchFlights());
      setShowModal(false);
    } catch (error) {
      console.error('Error updating flight:', error);
    }
  };

  return (
    <Container className="admin-page-container">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Admin Page</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <h2>Add Flight</h2>
          <Form onSubmit={handleAddSubmit}>
            <Form.Group controlId="formFlightId">
              <Form.Label>Flight ID</Form.Label>
              <Form.Control
                type="text"
                name="flight_id"
                value={formData.flight_id}
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
                name="departure_gate"
                value={formData.departure_gate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formArrivalGate">
              <Form.Label>Arrival Gate</Form.Label>
              <Form.Control
                type="text"
                name="arrival_gate"
                value={formData.arrival_gate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formScheduledDeparture">
              <Form.Label>Scheduled Departure</Form.Label>
              <Form.Control
                type="datetime-local"
                name="scheduled_departure"
                value={formData.scheduled_departure}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formScheduledArrival">
              <Form.Label>Scheduled Arrival</Form.Label>
              <Form.Control
                type="datetime-local"
                name="scheduled_arrival"
                value={formData.scheduled_arrival}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formActualDeparture">
              <Form.Label>Actual Departure</Form.Label>
              <Form.Control
                type="datetime-local"
                name="actual_departure"
                value={formData.actual_departure}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formActualArrival">
              <Form.Label>Actual Arrival</Form.Label>
              <Form.Control
                type="datetime-local"
                name="actual_arrival"
                value={formData.actual_arrival}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Flight
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mb-4">
          <h2>Update Flight</h2>
          <Form.Group controlId="formFlightSelect">
            <Form.Label>Select Flight</Form.Label>
            <Select
              value={selectedFlight}
              onChange={handleFlightSelect}
              options={flightOptions}
              isClearable
              isSearchable
              placeholder="Type to search flights..."
            />
          </Form.Group>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Update Flight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleUpdateSubmit}>
                <Form.Group controlId="modalFlightId">
                  <Form.Label>Flight ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="flight_id"
                    value={formData.flight_id}
                    onChange={handleInputChange}
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="modalAirline">
                  <Form.Label>Airline</Form.Label>
                  <Form.Control
                    type="text"
                    name="airline"
                    value={formData.airline}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="modalStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="modalDepartureGate">
                  <Form.Label>Departure Gate</Form.Label>
                  <Form.Control
                    type="text"
                    name="departure_gate"
                    value={formData.departure_gate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalArrivalGate">
                  <Form.Label>Arrival Gate</Form.Label>
                  <Form.Control
                    type="text"
                    name="arrival_gate"
                    value={formData.arrival_gate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalScheduledDeparture">
                  <Form.Label>Scheduled Departure</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="scheduled_departure"
                    value={formData.scheduled_departure}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalScheduledArrival">
                  <Form.Label>Scheduled Arrival</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="scheduled_arrival"
                    value={formData.scheduled_arrival}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalActualDeparture">
                  <Form.Label>Actual Departure</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="actual_departure"
                    value={formData.actual_departure}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalActualArrival">
                  <Form.Label>Actual Arrival</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="actual_arrival"
                    value={formData.actual_arrival}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Flight
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;

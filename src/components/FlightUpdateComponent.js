import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { fetchFlights } from '../redux/slices/flightSlice';
import ApiService from '../services/ApiService';
import '../styles/AdminComponent.css';


const FlightUpdateComponent = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((state) => state.flights);

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const flightOptions = flights.map(flight => ({
    value: flight.flightId,
    label: `${flight.flightId} - ${flight.airline}`
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
      const flight = flights.find(f => f.flightId === selectedOption.value);
      setFormData({
        flightId: flight.flightId,
        airline: flight.airline,
        status: flight.status,
        departureGate: flight.departureGate,
        arrivalGate: flight.arrivalGate,
        scheduledDeparture: flight.scheduledDeparture,
        scheduledArrival: flight.scheduledArrival,
        actualDeparture: flight.actualDeparture,
        actualArrival: flight.actualArrival
      });
      setShowModal(true);
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
                    name="flightId"
                    value={formData.flightId}
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
                    name="departureGate"
                    value={formData.departureGate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalArrivalGate">
                  <Form.Label>Arrival Gate</Form.Label>
                  <Form.Control
                    type="text"
                    name="arrivalGate"
                    value={formData.arrivalGate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalScheduledDeparture">
                  <Form.Label>Scheduled Departure</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="scheduledDeparture"
                    value={formData.scheduledDeparture}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalScheduledArrival">
                  <Form.Label>Scheduled Arrival</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="scheduledArrival"
                    value={formData.scheduledArrival}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalActualDeparture">
                  <Form.Label>Actual Departure</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="actualDeparture"
                    value={formData.actualDeparture}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="modalActualArrival">
                  <Form.Label>Actual Arrival</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="actualArrival"
                    value={formData.actualArrival}
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

export default FlightUpdateComponent;

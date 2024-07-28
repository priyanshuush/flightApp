import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Select from 'react-select';
import { subscribeToNotifications } from '../redux/slices/notificationSlice';
import { fetchFlights } from '../redux/slices/flightSlice';
import '../styles/NotificationSettingsComponent.css';
import { messaging } from '../firebase';

const NotificationSettingsComponent = () => {
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');
  const [notificationMethod, setNotificationMethod] = useState('');
  const [selectedFlight, setSelectedFlight] = useState(null);
  
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.notifications);
  const { flights } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribeToNotifications({ 
      email, 
      sms, 
      notificationMethod, 
      flightId: selectedFlight ? selectedFlight.value : null 
    }));
  };

  const requestPermission = async () => {
    try {
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Notification permission granted and token is:', token);
    } catch (error) {
      console.error('Unable to get permission to notify.', error);
    }
  };

  const flightOptions = flights.map(flight => ({
    value: flight.flightId,
    label: `${flight.flightId} - ${flight.airline}`
  }));

  return (
    <Container className="notification-settings-container">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Notification Settings</h2>
          {status === 'succeeded' && (
            <Alert variant="success">Subscription successful!</Alert>
          )}
          {status === 'failed' && (
            <Alert variant="danger">{error}</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFlightId">
              <Form.Label>Select Flight</Form.Label>
              <Select
                value={selectedFlight}
                onChange={setSelectedFlight}
                options={flightOptions}
                isClearable
                isSearchable
                placeholder="Type to search flights..."
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSms">
              <Form.Label>SMS</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={sms}
                onChange={(e) => setSms(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formNotificationMethod">
              <Form.Label>Notification Method</Form.Label>
              <Form.Control
                as="select"
                value={notificationMethod}
                onChange={(e) => setNotificationMethod(e.target.value)}
              >
                <option value="">Select method</option>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="push">Push Notification</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-submit">
              Save Settings
            </Button>
          </Form>
          <Button variant="secondary" onClick={requestPermission} className="mt-3">
            Enable Push Notifications
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotificationSettingsComponent;
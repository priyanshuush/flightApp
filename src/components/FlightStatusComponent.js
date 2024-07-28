import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Container, Row, Col, Spinner } from 'react-bootstrap';
import { fetchFlights } from '../redux/slices/flightSlice';
import ApiService from '../services/ApiService';
import '../styles/FlightStatusComponent.css';

const FlightStatusComponent = () => {
  const dispatch = useDispatch();
  const { flights, status, error } = useSelector((state) => state.flights);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFlights());
    }

    const handleWebSocketMessage = (message) => {
      console.log('Received WebSocket message:', message);
      dispatch(fetchFlights()); // Re-fetch flights to get the latest status
    };

    ApiService.connectWebSocket(handleWebSocketMessage);
  }, [status, dispatch]);

  return (
    <Container fluid className="flight-status-container">
  <Row>
    <Col>
      <h2 className="text-center mb-4">Flight Status</h2>
      {status === 'loading' ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : status === 'failed' ? (
        <div className="text-center text-danger">
          <p>Error: {error}</p>
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="flight-table">
          <thead>
                <tr>
                <th>Flight Number</th>
                   <th>Airline</th>
                   <th>Status</th>
                  <th>Departure Gate</th>
                   <th>Arrival Gate</th>
                   <th>Scheduled Departure</th>
                     <th>Scheduled Arrival</th>
                  
               
                 </tr>

              

               </thead>
               <tbody>
                 {flights.map((flight) => (
                   <tr key={flight.flightId}>
                     <td>{flight.flightId}</td>
                     <td>{flight.airline}</td>
                    <td>{flight.status}</td>
                    <td>{flight.departureGate}</td>
                    <td>{flight.arrivalGate}</td>
                   <td>{flight.scheduledDeparture}</td>
                   <td>{flight.scheduledArrival}</td>
                    
                 </tr>
                ))}
             </tbody>
          </Table>
        </div>
      )}
    </Col>
  </Row>
</Container>
    
  );
};

export default FlightStatusComponent;

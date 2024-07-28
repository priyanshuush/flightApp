
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/FooterComponent.css';


const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Flight Status & Notifications
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

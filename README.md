# Flight Status and Notification System

This project is a Flight Status and Notification System built with React for the frontend, Java (Spring Boot) for the backend, and MongoDB for the database. The system includes real-time updates of flight statuses via WebSockets.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Setup](#setup)
- [Frontend](#frontend)
- [Backend](#backend)
- [WebSocket](#websocket)
- [Usage](#usage)

## Features
- View and update flight status in real-time.
- Add new flight details.
- Update existing flight details.
- WebSocket connection for real-time updates.

## Architecture
The project is divided into two main parts:
1. **Frontend**: Built with React, providing a user interface for viewing and managing flight details.
2. **Backend**: Built with Java (Spring Boot), handling RESTful API requests and WebSocket connections for real-time updates.

## Setup

### Prerequisites
- Node.js and npm
- Java 8 or higher
- MongoDB

### Steps to Run the Project
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/flight-status-notification-system.git
    cd flight-status-notification-system
    ```

2. Set up the backend:
    - Navigate to the `backend` directory:
      ```sh
      cd backend
      ```
    - Install dependencies and run the backend server:
      ```sh
      mvn clean install
      mvn spring-boot:run
      ```

3. Set up the frontend:
    - Navigate to the `frontend` directory:
      ```sh
      cd ../frontend
      ```
    - Install dependencies and start the frontend server:
      ```sh
      npm install
      npm start
      ```

## Frontend
### Components
- **FlightStatusComponent**: Displays the status of flights.
- **NotificationSettingsComponent**: Manages user notification settings.
- **AdminComponent**: Admin page with sections to add new flights and update existing flight details.
- **FlightUploadComponent**: Form to add new flight details.
- **FlightUpdateComponent**: Form to update existing flight details.

### Styles
- The styles for the components are defined in CSS files located in the `src/styles` directory.

### CSS Files
- **AdminComponent.css**
- **DashboardComponent.css**
- **FlightStatusComponent.css**

## Backend
### Controllers
- **FlightController**: Handles API requests for flight details.

### Services
- **FlightService**: Contains business logic for managing flight details.

### Models
- **FlightStatus**: Represents the flight status data model.

### Endpoints
- `GET /api/flights`: Get all flight details.
- `GET /api/flights/{flightId}`: Get flight details by ID.
- `PUT /api/flights/update/{flightId}`: Update flight details.

### Example Flight Data
```json
{
  "_id": {
    "$oid": "66a4ca901e7cdeb3da89a592"
  },
  "flight_id": "6E 2342",
  "airline": "Indigo",
  "status": "Delayed",
  "departure_gate": "C3",
  "arrival_gate": "D4",
  "scheduled_departure": {
    "$date": "2024-07-26T16:00:00.000Z"
  },
  "scheduled_arrival": {
    "$date": "2024-07-26T20:00:00.000Z"
  },
  "actual_departure": null,
  "actual_arrival": null
}

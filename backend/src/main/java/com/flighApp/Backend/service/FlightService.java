package com.flighApp.Backend.service;

import com.flighApp.Backend.model.FlightStatus;
import com.flighApp.Backend.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    // Fetch all flight statuses
    public List<FlightStatus> getAllFlights() {
        return flightRepository.findAll();
    }

    // Fetch flight status by flight ID
    public Optional<FlightStatus> getFlightById(String flightId) {
        return flightRepository.findByFlightId(flightId);
    }

    // Update flight status
//    public FlightStatus updateFlightStatus(FlightStatus flightStatus) {
//        return flightRepository.save(flightStatus);
//    }

    public FlightStatus addFlight(FlightStatus flightStatus) {

        if (flightRepository.findByFlightId(flightStatus.getFlightId()).isPresent()) {
            throw new IllegalArgumentException("A flight with ID " + flightStatus.getFlightId() + " already exists.");
        }


        return flightRepository.save(flightStatus);
    }
    public FlightStatus updateFlightStatus(FlightStatus flightStatus) {
        if (flightStatus.getFlightId() == null) {
            throw new IllegalArgumentException("Flight ID cannot be null");
        }

        Optional<FlightStatus> existingFlightOptional = flightRepository.findByFlightId(flightStatus.getFlightId());
        if (existingFlightOptional.isPresent()) {
            FlightStatus existingFlight = existingFlightOptional.get();

            if (flightStatus.getAirline() != null) {
                existingFlight.setAirline(flightStatus.getAirline());
            }
            if (flightStatus.getStatus() != null) {
                existingFlight.setStatus(flightStatus.getStatus());
            }
            if (flightStatus.getDepartureGate() != null) {
                existingFlight.setDepartureGate(flightStatus.getDepartureGate());
            }
            if (flightStatus.getArrivalGate() != null) {
                existingFlight.setArrivalGate(flightStatus.getArrivalGate());
            }
            if (flightStatus.getScheduledDeparture() != null) {
                existingFlight.setScheduledDeparture(flightStatus.getScheduledDeparture());
            }
            if (flightStatus.getScheduledArrival() != null) {
                existingFlight.setScheduledArrival(flightStatus.getScheduledArrival());
            }
            if (flightStatus.getActualDeparture() != null) {
                existingFlight.setActualDeparture(flightStatus.getActualDeparture());
            }
            if (flightStatus.getActualArrival() != null) {
                existingFlight.setActualArrival(flightStatus.getActualArrival());
            }

            return flightRepository.save(existingFlight);
        } else {
            throw new IllegalArgumentException("Flight with ID " + flightStatus.getFlightId() + " not found.");
        }
    }

}
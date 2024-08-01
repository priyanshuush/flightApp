package com.flighApp.Backend.controller;

import com.flighApp.Backend.model.FlightStatus;
import com.flighApp.Backend.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping
    public List<FlightStatus> getAllFlights() {
        return flightService.getAllFlights();
    }

    @GetMapping("/{flightId}")
    public Optional<FlightStatus> getFlightById(@PathVariable String flightId) {
        return flightService.getFlightById(flightId);
    }
    @PostMapping("/add")
    public FlightStatus addFlight(@RequestBody FlightStatus flightStatus) {
        FlightStatus addedFlight = flightService.addFlight(flightStatus);
        //  broadcast the new flight to WebSocket clients
        broadcastFlightStatusUpdate(addedFlight);
        return addedFlight;
    }

    @PostMapping("/update")
    public FlightStatus updateFlightStatus(@RequestBody FlightStatus flightStatus) {
        FlightStatus updatedFlight = flightService.updateFlightStatus(flightStatus);
        // Broadcast update to WebSocket clients
        broadcastFlightStatusUpdate(updatedFlight);
        return updatedFlight;
    }

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    private void broadcastFlightStatusUpdate(FlightStatus flightStatus) {
        messagingTemplate.convertAndSend("/topic/flightStatus", flightStatus);
    }
}





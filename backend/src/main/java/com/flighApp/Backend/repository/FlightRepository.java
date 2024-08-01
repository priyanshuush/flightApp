package com.flighApp.Backend.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.flighApp.Backend.model.FlightStatus;
import java.util.Optional;

public interface FlightRepository extends MongoRepository<FlightStatus, ObjectId> {
    Optional<FlightStatus> findByFlightId(String flightId);

}
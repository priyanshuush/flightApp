package com.flighApp.Backend.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.bson.types.ObjectId;
import java.util.Date;

@Document(collection = "Flight Data")
public class FlightStatus {

    @Id
    private ObjectId id;

        @Field("flight_id")
        private String flightId;

        private String airline;
        private String status;

        @Field("departure_gate")
        private String departureGate;

        @Field("arrival_gate")
        private String arrivalGate;

        @Field("scheduled_departure")
        private Date scheduledDeparture;

        @Field("scheduled_arrival")
        private Date scheduledArrival;

        @Field("actual_departure")
        private Date actualDeparture;

        @Field("actual_arrival")
        private Date actualArrival;

    // Constructors, Getters, and Setters

    public FlightStatus() {}



    public FlightStatus(String flightId, String airline, String status, String departureGate, String arrivalGate, Date scheduledDeparture, Date scheduledArrival, Date actualDeparture, Date actualArrival) {
        this.flightId = flightId;
        this.airline = airline;
        this.status = status;
        this.departureGate = departureGate;
        this.arrivalGate = arrivalGate;
        this.scheduledDeparture = scheduledDeparture;
        this.scheduledArrival = scheduledArrival;
        this.actualDeparture = actualDeparture;
        this.actualArrival = actualArrival;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDepartureGate() {
        return departureGate;
    }

    public void setDepartureGate(String departureGate) {
        this.departureGate = departureGate;
    }

    public String getArrivalGate() {
        return arrivalGate;
    }

    public void setArrivalGate(String arrivalGate) {
        this.arrivalGate = arrivalGate;
    }

    public Date getScheduledDeparture() {
        return scheduledDeparture;
    }

    public void setScheduledDeparture(Date scheduledDeparture) {
        this.scheduledDeparture = scheduledDeparture;
    }

    public Date getScheduledArrival() {
        return scheduledArrival;
    }

    public void setScheduledArrival(Date scheduledArrival) {
        this.scheduledArrival = scheduledArrival;
    }

    public Date getActualDeparture() {
        return actualDeparture;
    }

    public void setActualDeparture(Date actualDeparture) {
        this.actualDeparture = actualDeparture;
    }

    public Date getActualArrival() {
        return actualArrival;
    }

    public void setActualArrival(Date actualArrival) {
        this.actualArrival = actualArrival;
    }
}
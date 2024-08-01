package com.flighApp.Backend.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Notifications")
public class NotificationPreference {

    @Id
    private String notificationId;
    private String flightId;
    private String message;
    private String timestamp;
    private String method;
    private String recipient;

    // Constructors, Getters, and Setters

    public NotificationPreference() {}

    public NotificationPreference(String notificationId, String flightId, String message, String timestamp,
                                  String method, String recipient) {
        this.notificationId = notificationId;
        this.flightId = flightId;
        this.message = message;
        this.timestamp = timestamp;
        this.method = method;
        this.recipient = recipient;
    }

    public String getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(String notificationId) {
        this.notificationId = notificationId;
    }

    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }
}

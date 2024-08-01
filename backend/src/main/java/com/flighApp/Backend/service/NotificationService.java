package com.flighApp.Backend.service;

import com.flighApp.Backend.kafka.NotificationProducer;
import com.flighApp.Backend.model.NotificationPreference;
import com.flighApp.Backend.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private NotificationProducer notificationProducer;

    // Subscribe to notifications
    public NotificationPreference subscribe(NotificationPreference notificationPreference) {
        return notificationRepository.save(notificationPreference);
    }

    // Fetch all notifications
    public List<NotificationPreference> getAllNotifications() {
        return notificationRepository.findAll();
    }

    // Send notification using Kafka
    public void sendNotification(NotificationPreference notificationPreference) {
        String message = "Notification for flight " + notificationPreference.getFlightId() + ": " + notificationPreference.getMessage();
        notificationProducer.sendMessage(message);
    }
}
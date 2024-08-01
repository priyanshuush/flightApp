package com.flighApp.Backend.controller;


import com.flighApp.Backend.model.NotificationPreference;
import com.flighApp.Backend.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/subscribe")
    public NotificationPreference subscribeToNotifications(@RequestBody NotificationPreference notificationPreference) {
        return notificationService.subscribe(notificationPreference);
    }

    @PostMapping("/send")
    public void sendNotifications(@RequestBody NotificationPreference notificationPreference) {
        notificationService.sendNotification(notificationPreference);
    }

    @GetMapping
    public List<NotificationPreference> getAllNotifications() {
        return notificationService.getAllNotifications();
    }
}
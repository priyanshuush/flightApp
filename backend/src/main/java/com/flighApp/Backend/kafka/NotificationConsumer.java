//package com.flighApp.Backend.kafka;
//
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//@Service
//public class NotificationConsumer {
//
//    @KafkaListener(topics = "flight_notifications", groupId = "notification-group")
//    public void consume(String message) {
//        System.out.println("Received message: " + message);
//
//    }
//}
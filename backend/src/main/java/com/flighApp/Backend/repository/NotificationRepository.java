package com.flighApp.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.flighApp.Backend.model.NotificationPreference;

public interface NotificationRepository extends MongoRepository<NotificationPreference, String> {

}

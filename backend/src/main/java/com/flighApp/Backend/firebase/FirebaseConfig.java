<<<<<<< HEAD

=======
>>>>>>> 169a950 (Added Backend APIs for User and Admin Portal)
package com.flighApp.Backend.firebase;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.IOException;
<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class FirebaseConfig {
    @Value("${FIREBASE_CREDENTIALS_PATH}")
    private String firebaseCredentialsPath;

    @Bean
    public FirebaseApp initializeFirebase() throws IOException {

        FileInputStream serviceAccount =
                new FileInputStream(firebaseCredentialsPath);
=======

@Configuration
public class FirebaseConfig {

    @Bean
    public FirebaseApp initializeFirebase() throws IOException {
        FileInputStream serviceAccount =
                new FileInputStream("../../../resources/flighapp-firebase-adminsdk-559o1-d89688d42c.json");
>>>>>>> 169a950 (Added Backend APIs for User and Admin Portal)

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        if (FirebaseApp.getApps().isEmpty()) {
            FirebaseApp.initializeApp(options);
        }

        return FirebaseApp.getInstance();
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 169a950 (Added Backend APIs for User and Admin Portal)

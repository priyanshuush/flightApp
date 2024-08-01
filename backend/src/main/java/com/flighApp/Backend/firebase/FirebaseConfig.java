
package com.flighApp.Backend.firebase;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class FirebaseConfig {
    @Value("${FIREBASE_CREDENTIALS_PATH}")
    private String firebaseCredentialsPath;

    @Bean
    public FirebaseApp initializeFirebase() throws IOException {

        FileInputStream serviceAccount =
                new FileInputStream(firebaseCredentialsPath);

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        if (FirebaseApp.getApps().isEmpty()) {
            FirebaseApp.initializeApp(options);
        }

        return FirebaseApp.getInstance();
    }
}

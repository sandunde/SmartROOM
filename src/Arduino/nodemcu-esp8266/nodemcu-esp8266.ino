#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define WIFI_SSID "SLT-FIBER"
#define WIFI_PASSWORD "0112707661a"

#define FIREBASE_HOST "smartroom-c0224.firebaseio.com"
#define FIREBASE_AUTH "https://accounts.google.com/o/oauth2/auth"
#define FIRESTORE_COLLECTION "smartroom-c0224"

void setup() {
  Serial.begin(9600);

  // connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
  }

  // initialize Firebase
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  // check for data from master board
  if (Serial.available()) {
    // read JSON data
    String json = Serial.readStringUntil('\n');

    // send data to Firebase Firestore
    Firebase.pushString(FIRESTORE_COLLECTION, json);
  }
}
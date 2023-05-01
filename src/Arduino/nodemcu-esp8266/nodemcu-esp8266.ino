#if defined(ESP32)
#include <WiFi.h>
#include <FirebaseESP32.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#endif
#include <Wire.h>

#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

#define WIFI_SSID "SLT-FIBER"
#define WIFI_PASSWORD "0112707661a"
#define API_KEY "AIzaSyCR7JTJRVNsEY285D77Ki_2ZQCvlzdH9tQ"
#define DATABASE_URL "smartroom-51043-default-rtdb.firebaseio.com/"
#define USER_EMAIL "ishini.20200918@iit.ac.lk"
#define USER_PASSWORD "12345678"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
unsigned long count = 0;

float h = 78.00;
float t = 30.60;
float lux = 64.17;

void setup() {

  Serial.begin(9600);
  Wire.begin(8);
  Wire.onReceive(receiveEvent);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);
  
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = DATABASE_URL;  
  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  Firebase.setDoubleDigits(5);
}

void loop() {

  if (Firebase.ready() && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    Serial.printf("Set Temperature... %s\n", Firebase.setFloat(fbdo, F("/test/temperature"), t) ? "ok" : fbdo.errorReason().c_str());
    Serial.printf("Get Temperature... %s\n", Firebase.getFloat(fbdo, F("/test/temperature")) ? String(fbdo.to<float>()).c_str() : fbdo.errorReason().c_str());

    Serial.printf("Set Humidity... %s\n", Firebase.setFloat(fbdo, F("/test/humidity"), h) ? "ok" : fbdo.errorReason().c_str());
    Serial.printf("Get Humidity... %s\n", Firebase.getFloat(fbdo, F("/test/humidity")) ? String(fbdo.to<float>()).c_str() : fbdo.errorReason().c_str());

    Serial.printf("Set Light Intensity... %s\n", Firebase.setFloat(fbdo, F("/test/light_intensity"), lux) ? "ok" : fbdo.errorReason().c_str());
    Serial.printf("Get Light Intensity... %s\n", Firebase.getFloat(fbdo, F("/test/light_intensity")) ? String(fbdo.to<float>()).c_str() : fbdo.errorReason().c_str());

    FirebaseJson json;

    if (count == 0) {
      json.set("value/round/" + String(count), F("cool!"));
      json.set(F("vaue/ts/.sv"), F("timestamp"));
      Serial.printf("Set json... %s\n", Firebase.set(fbdo, F("/test/json"), json) ? "ok" : fbdo.errorReason().c_str());
    } else {
      json.add(String(count), "smart!");
      Serial.printf("Update node... %s\n", Firebase.updateNode(fbdo, F("/test/json/value/round"), json) ? "ok" : fbdo.errorReason().c_str());
    }
    
    Serial.println();
    
    count++;
  }
}

void receiveEvent(int byteCount) {
  h = Wire.read(); 
  t = Wire.read(); 
  lux = Wire.read();

  delay(1000);
}


  // master
#include <Wire.h>

const byte LED_PIN = 13;

void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
  Wire.begin(9); // address of the second Arduino board
  Wire.onReceive(receiveEvent);
}

void loop() {
  // do nothing
}

void receiveEvent(int byteCount) {
  byte value = Wire.read();
  if (value == 1) {
    digitalWrite(LED_PIN, HIGH); // turn on the LED bulb
  } else {
    digitalWrite(LED_PIN, LOW); // turn off the LED bulb
  }

  float h = Wire.read(); // receive humidity value
  float t = Wire.read(); // receive temperature value
  int p = Wire.read(); 
  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
}

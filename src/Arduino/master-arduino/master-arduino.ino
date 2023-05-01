#include <Wire.h>

void setup() {
  Serial.begin(9600);
  Wire.begin(9);
  Wire.onReceive(receiveEvent);
}

void loop() {}

void receiveEvent(int byteCount) {
  byte value = Wire.read();
  float h = Wire.read(); 
  float t = Wire.read(); 
  float lux = Wire.read(); 

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("˚C  Light Intensity: "));
  Serial.print(lux);
  Serial.print(F(" lx \n"));

  delay(1000);
}
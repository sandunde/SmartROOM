// master
#include <Wire.h>
void setup() {
  Serial.begin(9600);
  Wire.begin(9);
  Wire.onReceive(receiveEvent);
}

void loop() {
}

void receiveEvent(int byteCount) {
  byte value = Wire.read();
  float h = Wire.read(); 
  float t = Wire.read(); 
  int p = Wire.read(); 
  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
}

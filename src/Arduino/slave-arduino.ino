//master
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <BH1750.h>

#include "DHT.h"
#define DHTPIN 2  
#define DHTTYPE DHT11  
DHT dht(DHTPIN, DHTTYPE);

Adafruit_SSD1306 display(128, 32, &Wire, -1);

const unsigned char bulbBitmap[] PROGMEM = {
  B00011000, 
  B00111100, 
  B11111111,
  B11111111, 
  B01111110,
  B01010100,
  B10110110,
  B00000000,

};
BH1750 lightMeter;

float temp = 0;
float hum = 0;
const int pirSensor = 4; 

void setup() {

  Serial.begin(9600); 
  Wire.begin();

  dht.begin();

  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  
  pinMode(pirSensor, INPUT);

  lightMeter.begin();
}

void loop() {

  delay(2000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float lux = lightMeter.readLightLevel();
  int pir = digitalRead(pirSensor);

  if (isnan(h) || isnan(t) /*|| isnan(f)*/) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.println((String)"Light: " + lux + " lx"); 
  Serial.print("PIR Sensor: ");
  Serial.println(pir);

  display.clearDisplay();
  display.setTextColor(WHITE);

  display.setTextSize(1.5);
  display.setCursor(0,0);
  display.print("Temperature");
  
  display.setTextSize(2);
  display.setCursor(10,10);
  display.print(t);

  display.setTextSize(1.5);
  display.setCursor(0,30);
  display.print("humidity");

  display.setTextSize(2);
  display.setCursor(10,40);
  display.print(h);

  display.drawBitmap(70, 12, bulbBitmap, 16, 16, WHITE);
  delay(100);

  display.display();

  display.dim(true);
  delay(500);
  display.dim(false);
  delay(500);

  Wire.beginTransmission(9); 
    //int luxInt = (int)lux;
    //Wire.write(luxInt);
  Wire.write(1);
  Wire.write((int)h); 
  Wire.write((int)t); 
  Wire.write(pir); 
  Wire.endTransmission(); 

  delay(1000);
}

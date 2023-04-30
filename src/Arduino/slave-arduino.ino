//master
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <BH1750.h>

#include "DHT.h"
#define DHTPIN 2  
#define DHTTYPE DHT11  
DHT dht(DHTPIN, DHTTYPE);

Adafruit_SSD1306 display(128, 32, &Wire, -1);

// Initialize the BH1750 light intensity sensor with the default I2C address
BH1750 lightMeter;

float temp = 0;
float hum = 0; 

void setup() {

  Serial.begin(9600);
  Wire.begin();

  dht.begin();

  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  lightMeter.begin();
}

void loop() {

  delay(2000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float lux = lightMeter.readLightLevel();

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) /*|| isnan(f)*/) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F(" C Light: "));
  Serial.print(lux);
  Serial.print(F(" lx \n"));

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
  display.print("Humidity");

  display.setTextSize(2);
  display.setCursor(10,40);
  display.print(h);

  //display.drawBitmap(70, 12, bulbBitmap, 16, 16, WHITE);
  delay(100);

  display.display();

  display.dim(true);
  delay(500);
  display.dim(false);
  delay(500);

  Wire.beginTransmission(9); // transmit to device #8
    //int luxInt = (int)lux;
    //Wire.write(luxInt);
  Wire.write(1);
  Wire.write((int)h); 
  Wire.write((int)t); 
  //Wire.write(pir); 
  Wire.endTransmission(); 

  delay(1000);
}

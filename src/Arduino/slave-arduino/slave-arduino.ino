//slave
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <BH1750.h>

#include "DHT.h"
#define DHTPIN 2  
#define DHTTYPE DHT11  
DHT dht(DHTPIN, DHTTYPE);

Adafruit_SSD1306 display(128, 32, &Wire, -1);
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
  
  if (isnan(h) || isnan(t) /*|| isnan(f)*/) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%   Temperature: "));
  Serial.print(t);
  Serial.print(F("˚C   Light Intensity: "));
  Serial.print(lux);
  Serial.print(F(" lx \n"));

  display.clearDisplay();
  display.setTextColor(WHITE);

  display.setTextSize(1);
  display.setCursor(0,0);
  display.print("Temperature");
  
  display.setTextSize(1.5);
  display.setCursor(80,0);
  display.print(t);

  display.setTextSize(1);
  display.setCursor(110,0);
  display.print(" 'C");

  display.setTextSize(1);
  display.setCursor(0,10);
  display.print("Humidity");

  display.setTextSize(1.5);
  display.setCursor(80,10);
  display.print(h);

  display.setTextSize(1);
  display.setCursor(110,10);
  display.print(" %");

  display.setTextSize(1);
  display.setCursor(0,20);
  display.print("Light Int.");

  display.setTextSize(1.5);
  display.setCursor(80,20);
  display.print(lux);

  display.setTextSize(1);
  display.setCursor(110,20);
  display.print(" lx");
  delay(100);

  display.display();

  display.dim(true);
  delay(500);
  display.dim(false);
  delay(500);

  Wire.beginTransmission(9);
  Wire.write(1);
  Wire.write((int)h); 
  Wire.write((int)t); 
  Wire.write((int)lux); 
  Wire.endTransmission(); 

  delay(1000);
}

#define BLYNK_TEMPLATE_ID "TMPL6nNz51cwA"
#define BLYNK_TEMPLATE_NAME "SmartROOM"
#define BLYNK_AUTH_TOKEN "-RZN_Eb-f1zioGsu82x7pPxt27d7icMJ"


#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>  
#include <BlynkSimpleEsp8266.h>
 

char auth[] = BLYNK_AUTH_TOKEN;
char ssid[] = "SLT-FIBER";
char pass[] = "0112707661a";

int ledpin = D4;
void setup()
{     
  Serial.begin(115200);
  Blynk.begin(auth, ssid, pass);    
  pinMode(ledpin,OUTPUT);
}

void loop()
{
  Blynk.run(); 
}
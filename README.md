# NoChoke  
## A school assignment using a Springboot backend with an React Native app as frontend
### This is build upon:
Springboot  
Spring security with JWT tokens    
Spring MVC  
Logger4J  
Postgresql  
H2 for tests  
External API for barcode searching  
Docker-compose for easy migration  

Frontend build with react-native  

### Follow this minimal tutorial to get up and running!
#### This project is dockerized so you got two alternatives

### 1.
run docker-compose up

### 2.
Import the project using maven in intellij, choose import from existing sources, choose the pom.xml file  
The backend uses an postgresql  
name= nochoke  
user =  postgres  
password = password  

This project uses Lombok to generate Getters and Setters, you´ll need to install this plugin to IntelliJ

## Frontend
The frontend needs your internal ip address on the network, find it out and change the BackendServerIP adress in the client project  
  
Open a terminal (Gitbash won´t work, use Linux subsystem on windows) and install following packages  
sudo apt-get install --global expo-cli  
expo install expo-barcode-scanner  
  
then go ahead and install the project using npm with npm install  
  
Run the dev server with npm start  
You´ll need the Expo app from AppStore or Google play  
once installed..  
Scan the qr code in the terminal with a IOS or Android device

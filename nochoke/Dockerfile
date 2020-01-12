FROM openjdk:8-jdk-alpine as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN apk update
RUN apk add sed
#CHANGE BACKEND ENDPOINT FOR DATABASE
RUN sed -i 's/localhost/postgres/g' src/main/resources/application.properties
RUN apk add maven

#EXPOSE PORTS FOR BACKEND AND MAIL
EXPOSE 8080
EXPOSE 587



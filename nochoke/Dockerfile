FROM openjdk:8-jdk-alpine as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN apk update
RUN apk add sed
RUN sed -i 's/localhost/postgres/g' src/main/resources/application.properties
RUN apk add maven

EXPOSE 8080



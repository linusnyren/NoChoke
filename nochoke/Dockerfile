FROM openjdk:8-jdk-alpine as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN apk update
RUN apk add maven
RUN echo maven installerat
RUN cat src/main/resources/application.properties

EXPOSE 8080



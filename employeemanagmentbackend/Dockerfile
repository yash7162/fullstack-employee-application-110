# FROM eclipse-temurin:17-jdk-jammy 

# #eclipse-temurin:17.0.7_7-jre-jammy is another choice for your base image
 
# WORKDIR /app

# COPY . .
# # COPY mvnw pom.xml ./
# RUN mvn clean install -DskipTests

# COPY target/employeemanagmentbackend-0.0.1-SNAPSHOT.jar /app

# COPY src ./src

# EXPOSE 8080

# CMD ["java", "-jar", "employeemanagmentbackend-0.0.1-SNAPSHOT.jar"]

# Use Official Maven Image to Build
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copy project files
COPY . .

# Build the project without tests
RUN mvn clean install -DskipTests

# Use JDK to Run the Application
FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copy JAR file from the build stage
COPY --from=build /app/target/employeemanagmentbackend-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]

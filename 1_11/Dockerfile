FROM eclipse-temurin:8-ubi10-minimal

EXPOSE 8080

RUN microdnf upgrade
RUN microdnf install -y maven

WORKDIR /usr/src/app

COPY . .

RUN ./mvnw package 


CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]

# Use an official Python runtime as a parent image
FROM node:9.11.1-stretch

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD ./build /app

COPY package*.json ./

RUN npm install 

# Make port 80 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD node index.js
 

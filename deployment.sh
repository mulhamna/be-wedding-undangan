#!/bin/bash

# Navigate to the application directory
cd /root/app/be-wedding-undangan

# Stop and remove the current Docker container
docker rm -f be-wedding-undangan

# Pull the latest updates from the main branch
git pull origin main

# Build the Docker image
docker build -t portal-jdih:latest . 

# Run the Docker container in detached mode, map the ports, and set to restart always
docker run -d --name portal-jdih -p 3000:3000 --restart=always portal-jdih:latest

# Remove unused Docker images
docker image prune -f
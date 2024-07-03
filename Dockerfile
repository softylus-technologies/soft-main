# Build stage
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Gatsby site
RUN npm run build

# Serve stage
FROM gatsbyjs/gatsby:latest

# Copy the built site from the build stage
COPY --from=build /app/public /pub

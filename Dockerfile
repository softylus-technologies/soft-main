# Use an official Node runtime as the parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Gatsby CLI and project dependencies
RUN npm install -g gatsby-cli && npm install

# Copy the current directory contents into the container
COPY . .

# Build the Gatsby site
RUN gatsby build

# Expose port 9000
EXPOSE 9000

# Run gatsby serve when the container launches
CMD ["gatsby", "serve", "-p", "9000", "--host", "0.0.0.0"]

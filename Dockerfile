# Build stage
FROM --platform=$BUILDPLATFORM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the Gatsby site
RUN npm run build

# Serve stage
FROM --platform=$TARGETPLATFORM gatsbyjs/gatsby:latest

# Copy the built site from the build stage
COPY --from=build /app/public /pub

# Expose port 8080 instead of 80
EXPOSE 8080

# Update the CMD to use port 8080
CMD ["bash", "-c", "envsubst < /etc/nginx/conf.d/default.conf.tpl > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

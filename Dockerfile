FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Gatsby CLI and project dependencies
RUN npm install -g gatsby-cli && npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the Gatsby site
RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "serve"]

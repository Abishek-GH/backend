# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 8000

# Run the server
CMD ["npm", "run", "dev"]


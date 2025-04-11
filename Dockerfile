# Development Stage
FROM node:18 AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]

# Production Stage
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

# Final Runtime Stage
FROM node:18-slim
WORKDIR /app
COPY --from=build /app ./
RUN npm install --production
EXPOSE 8000
CMD ["node", "dist/server.js"]

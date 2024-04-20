# Build stage
FROM node:current-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html/

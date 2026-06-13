# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]


# # Multi-stage
# # 1) Node image for building frontend assets
# # 2) nginx stage to serve frontend assets

# # Name the node stage "builder"
# FROM node:19.9.0-alpine3.18 AS builder
# # Set working directory
# WORKDIR /app
# # Copy all files from current directory to working dir in image
# COPY . .
# # install node modules and build assets
# #RUN npm update
# RUN yarn install && yarn run build

# # nginx state for serving content
# FROM nginx:bullseye
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

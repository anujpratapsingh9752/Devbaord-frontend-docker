# This is a base image
FROM node:24

# This is my working directory
WORKDIR /app

# Copy code source(current-dir-local) to destination(app directory-container)
COPY . .

# This command download requirements for running node application
RUN npm install

# This is a port number my app run this port
EXPOSE 5173

# This cmd run my application
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173" ]

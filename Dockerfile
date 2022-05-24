FROM node:16.14

RUN npm install -g npm

WORKDIR /app

EXPOSE 3000

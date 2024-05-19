FROM node:18.18.0-alpine

WORKDIR /server
COPY server/ .

EXPOSE 8000:8000
RUN npm install
CMD ["npm", "run", "start"]
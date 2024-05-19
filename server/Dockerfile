FROM node:18.18.0-alpine

WORKDIR /server
COPY server/src/ /server/src
COPY server/package.json /server/
COPY server/.env /server/
COPY server/tsconfig.json /server/

EXPOSE 8000:8000
RUN npm install
CMD ["npm", "run", "start"]
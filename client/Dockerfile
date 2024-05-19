FROM node:18.8.0-alpine as builder
WORKDIR /client
COPY client/package*.json .

RUN npm install
COPY client/ .
RUN npm run build

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /client/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
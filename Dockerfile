FROM node:8.3.0-alpine
MAINTAINER Bjarne Oeverli

WORKDIR /app

COPY package.json .

RUN npm i

ADD . .

RUN npm run build -- --build-disableProgressbar="true"

EXPOSE 3000

CMD ["npm", "start"]

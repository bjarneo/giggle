FROM node:6
MAINTAINER Bjarne Oeverli

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

ADD . /app

RUN npm run build -- --build-disableProgressbar="true"

EXPOSE 3000

CMD ["npm", "start"]

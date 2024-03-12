FROM node:21-alpine3.18

RUN mkdir -p /usr/src/api-nest
WORKDIR /usr/src/api-nest

RUN apk update && apk upgrade
RUN apk add python3 g++ make

COPY . /usr/src/api-nest/
RUN npm install -f

EXPOSE 3000

CMD [ "npm","run", "start:dev" ]
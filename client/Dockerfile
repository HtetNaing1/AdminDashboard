FROM node:18.16.0-alpine3.16

RUN npm install -g nodemon

WORKDIR /client_d

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
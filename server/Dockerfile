FROM node:18.16.0-alpine3.16

RUN npm install -g nodemon

WORKDIR /server_d

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "run", "dev" ]




FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install express

COPY . .

EXPOSE 3030
CMD [ "node", "index.cjs" ]


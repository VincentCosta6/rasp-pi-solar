FROM node:alpine

COPY ./package.json .

RUN apt-get update && apt-get install python -y

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
FROM node:alpine

COPY ./package.json .

RUN sudo apt-get update
RUN sudo apt-get install python

RUN sudo npm install

COPY . .

CMD ["npm", "run", "start"]
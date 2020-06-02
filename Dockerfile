FROM node:alpine

COPY ./package.json .

RUN sudo npm install

COPY . .

CMD ["npm", "run", "start"]
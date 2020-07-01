FROM node:11-alpine

RUN mkdir -p /usr/src/hooks

WORKDIR /usr/src/hooks

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

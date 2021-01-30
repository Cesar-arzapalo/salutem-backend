FROM node:12

WORKDIR /ruso

COPY package*.json ./

COPY . .

RUN npm install -g typescript

RUN tsc -w

CMD ["npm","start"]
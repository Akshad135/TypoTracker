FROM node:18

WORKDIR /eletypes_react

ADD package.json package-lock.json 

RUN npm install

ADD src/ ./src
ADD public/ ./public


EXPOSE 3000

CMD [ "npm", "start" ]

FROM node:12.12.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY package.json package-lock.json ./

RUN npm install

COPY --chown=node:node . .

CMD ["npm","start"]
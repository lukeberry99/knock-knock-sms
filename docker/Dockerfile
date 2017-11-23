FROM node:carbon

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY src/ src/

EXPOSE 3000

CMD ["npm", "start"]

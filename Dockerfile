# define image
FROM node:8

# Maintainer details
MAINTAINER harrisonkamau <kamauharrison87@gmail.com>

# create app directory
WORKDIR /usr/src/app

# Install nodemon
RUN npm install nodemon -g

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle up app source
COPY . .

# Expose app port
EXPOSE 4000

# define commands to run
CMD ["npm", "start"]

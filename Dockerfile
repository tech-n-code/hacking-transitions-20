# Comment out lines 4 through 10 when running dev environment
# Un-comment them out when building heroku deployment
FROM node:18-alpine
RUN npm install -g npm@9.8.1
# WORKDIR /code
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run heroku-postbuild
# EXPOSE 3000
# CMD ["npm", "start"]
# Comment out lines 4 through 9 when running dev environment
# Un-comment them out when building heroku deployment
FROM node:20.9.0-alpine3.18
# WORKDIR /code
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run heroku-postbuild
# EXPOSE 3000
# CMD ["npm", "start"]
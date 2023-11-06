# Comment out line 7 when running local dev environment
# Un-comment out when running Heroku deploy
FROM node:20.9.0-alpine3.18
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
# RUN npm run heroku-postbuild
EXPOSE 8000
CMD ["npm", "start"]

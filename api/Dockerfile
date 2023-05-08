FROM node:16-alpine
WORKDIR /code
COPY package*.json .
RUN npm ci
COPY . .
# RUN npm run heroku-postbuild
EXPOSE 3000
CMD ["npm", "start"]

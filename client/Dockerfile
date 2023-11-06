FROM node:20.9.0-alpine3.18
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3005
CMD ["npm", "run", "build"]

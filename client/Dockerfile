FROM node:18-alpine
RUN npm install -g npm@9.8.1
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "build"]

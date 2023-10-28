FROM --platform=linux/amd64 node:21
WORKDIR '/backend'

COPY package.json ./
COPY package-lock.json ./

COPY . ./
RUN npm install --silent

EXPOSE 8080
CMD ["node", "index.js"]

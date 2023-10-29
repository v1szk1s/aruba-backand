FROM --platform=linux/amd64 node:21
WORKDIR '/back'

COPY package.json ./
COPY package-lock.json ./

COPY . .
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN npm install --silent

EXPOSE 8080
CMD ["node", "index.js"]

FROM node
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js
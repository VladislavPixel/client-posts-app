FROM node:16.13.0 as client

WORKDIR /app/client

COPY ./client-posts-app/package.json /app/client

RUN npm install

COPY ./client-posts-app /app/client

# RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
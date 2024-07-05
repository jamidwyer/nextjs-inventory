FROM node:alpine


RUN mkdir /client
COPY . /client
COPY package.json /client/package.json
WORKDIR /client
RUN chmod +x ./entrypoint.sh
RUN npm install

CMD ["./entrypoint.sh"]
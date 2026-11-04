FROM ubuntu

EXPOSE 5001
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y curl ca-certificates

RUN curl -fsSL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh

RUN apt-get install -y nodejs

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build
RUN npm install -g serve 
RUN 

ENV REACT_APP_BACKEND_URL="http://example.com npm run build"

CMD ["serve", "-s", "-l", "5001", "build"]

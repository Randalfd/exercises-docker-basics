FROM node:22.23.1-alpine3.24

WORKDIR /usr/src/app

# 1) Dependencias primero: esta capa se cachea y no se invalida
#    cada vez que tocás el código.
COPY package.json package-lock.json ./
RUN npm ci

# 2) Código de la aplicación.
COPY . .

# 3) Build estático -> dist/
RUN npm run build

EXPOSE 4321

# 4) Usuario sin privilegios.
USER node

# 5) --host 0.0.0.0: sin esto el server escucha solo en localhost
#    del contenedor y queda inalcanzable desde afuera.
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]

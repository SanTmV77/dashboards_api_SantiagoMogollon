# Etapa de construcción
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

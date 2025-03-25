# Фаза сборки
FROM node:20-alpine as builder
WORKDIR /products
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Создаёт /app/dist

# Фаза запуска (лёгкий Nginx)
FROM nginx:alpine
COPY --from=builder /products/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
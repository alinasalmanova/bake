FROM node:20-alpine

WORKDIR /app

ENV DATABASE_URL="file:./prisma/dev.db"

COPY package*.json ./
RUN npm install

COPY . .

# генерируем prisma клиент
RUN npx prisma generate

# делаем production build
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]

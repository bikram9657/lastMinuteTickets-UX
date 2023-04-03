FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY --from=0 /app/dist/lmt-landing-page-shell /usr/share/nginx/html
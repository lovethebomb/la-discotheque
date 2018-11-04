FROM node:alpine

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV DISCOGS_API_KEY=empty-api-key
ENV DISCOGS_API_SECRET=empty-secret-key
ENV DISCOGS_USERNAME=empty-discogs-username
ENV BASE_URL=http://localhost:${PORT}

# Create app directory
RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci

COPY . /app/
RUN npm run build

CMD [ "npm", "start" ]

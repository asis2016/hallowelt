FROM node:current-alpine3.14
RUN apk add curl
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]

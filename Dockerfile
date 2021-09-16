FROM node:current-alpine3.14
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]

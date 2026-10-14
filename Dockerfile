FROM node:22-alpine

WORKDIR /app
COPY server.mjs marker.txt ./

ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.mjs"]

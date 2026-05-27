FROM node:18-alpine
WORKDIR /app
COPY app.js .

# Production practice: Never run as root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080
CMD ["node", "server.js"]
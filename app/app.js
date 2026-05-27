const http = require('http');
const version = process.env.APP_VERSION || 'v1.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`App is running! Current Version: ${version}\n`);
});

server.listen(8080, () => {
  console.log(`Listening on port 8080`);
});
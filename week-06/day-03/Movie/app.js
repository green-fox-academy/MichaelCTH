const http = require('http');
const url = require('url');
const { moviesHandler, movieHandler } = require('./routeHandler');

const PORT = 3000;
const HOST = '127.0.0.1';

const app = http.createServer();

app.on('request', (req, res) => {
  const reqUrl = url.parse(req.url, true);
  if (reqUrl.pathname === '/movies') {
    moviesHandler(req, res, reqUrl);
  } else if (reqUrl.pathname.startsWith('/movies')) {
    movieHandler(req, res, reqUrl);
  } else {
    res.statusCode = 400;
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at ${HOST} on port ${PORT}`);
});

const http = require('http');
const url = require('url');
const wrapRes = require('./wrapResponse');
const wrapReq = require('./wrapRequest');

const fakeExpress = {
  app: http.createServer(),
};
const routes = [];
fakeExpress.listen = (PORT, callback) => {
  fakeExpress.app.on('request', (req, res) => {
    const reqUrl = url.parse(req.url, true);
    let found = false;
    routes.forEach((item) => {
      if (reqUrl.pathname === item.route && req.method === item.method) {
        found = true;
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', () => {
          item.callback(wrapReq(req, body), wrapRes(res));
        });
      }
    });
    if (!found) {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });
  fakeExpress.app.listen(PORT, 'localhost', callback);
};

fakeExpress.get = (route, callback) => {
  routes.push({ method: 'GET', route, callback });
};

fakeExpress.post = (route, callback) => {
  routes.push({ method: 'POST', route, callback });
};

module.exports = () => fakeExpress;

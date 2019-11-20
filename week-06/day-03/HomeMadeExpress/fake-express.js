const http = require('http');
const url = require('url');
const wrapRes = require('./wrapResponse');
const wrapReq = require('./wrapRequest');

const fakeExpress = {
  app: http.createServer(),
};

fakeExpress.listen = (PORT, callback) => {
  fakeExpress.app.listen(PORT, 'localhost', callback);
};

fakeExpress.get = (route, callback) => {
  fakeExpress.app.on('request', (req, res) => {
    const reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname === route && req.method === 'GET') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        callback(wrapReq(req, body), wrapRes(res));
      });
    }
  });
};

fakeExpress.post = (route, callback) => {
  fakeExpress.app.on('request', (req, res) => {
    const reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname === route && req.method === 'POST') {
      callback(wrapReq(req), wrapRes(res));
    }
  });
};

module.exports = () => fakeExpress;

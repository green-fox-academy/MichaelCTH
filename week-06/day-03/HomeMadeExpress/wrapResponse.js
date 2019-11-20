const wrapper = (res) => ({
  ...res,
  status: (code) => {
    res.statusCode = code;
  },
  sendStatus: (code) => {
    res.statusCode = code;
    res.end();
  },
  send: (response) => {
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  },
  set: (key, val) => {
    res.setHeader(key, val);
  },
});

module.exports = wrapper;

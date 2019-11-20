const url = require('url');

const wrapper = (req, body) => {
  const reqUrl = url.parse(req.url, true);
  const pathNames = reqUrl.pathname.split('/');
  const queryObj = {};
  pathNames.forEach((i) => {
    if (i !== '') {
      queryObj[i] = i;
    }
  });

  return {
    params: queryObj,
    query: reqUrl.query,
    body: JSON.parse(body),
    oriReq: req,
  };
};

module.exports = wrapper;

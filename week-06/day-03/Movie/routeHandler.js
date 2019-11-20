let movieList = [];

const movieHandler = (req, res, reqUrl) => {
  const paths = reqUrl.pathname.split('/');
  const id = parseInt(paths[paths.length - 1], 10);
  const rst = movieList.filter((m) => m.id === id);
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rst));
  } else if (req.method === 'DELETE') {
    if (!req.headers.authorization || req.headers.authorization !== 'top-secret') {
      res.statusCode = 403;
      return res.end('Not Authorized');
    }

    if (rst.length === 0) {
      res.statusCode = 404;
      return res.end('Movie Not Found');
    }

    movieList = movieList.filter((m) => m.id !== id);
    res.statusCode = 204;
    res.end('Deleted');
  } else if (req.method === 'PUT') {
    if (!req.headers.authorization || req.headers.authorization !== 'top-secret') {
      res.statusCode = 403;
      return res.end('Not Authorized');
    }

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      if (body === '') {
        res.statusCode = 400;
        return res.end('Missing Data');
      }

      let movie = null;
      try {
        movie = JSON.parse(body);
      } catch (e) {
        res.statusCode = 400;
        return res.end('Bad Request');
      }

      if (!movie.id || !movie.title || !movie.genre || movie.id !== id) {
        res.statusCode = 400;
        return res.end('Bad Request');
      }

      if (rst.length === 0) {
        res.statusCode = 404;
        return res.end('Movie Not Found');
      }

      movieList = movieList.filter((m) => m.id !== id);
      movieList.push(movie);
      res.statusCode = 200;
      return res.end('Updated');
    });
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
};

const moviesHandler = (req, res, reqUrl) => {
  if (req.method === 'GET') {
    let rst = movieList;
    if (reqUrl.query.genre) {
      rst = movieList.filter((m) => m.genre === reqUrl.query.genre);
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rst));
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      if (body === '') {
        res.statusCode = 400;
        return res.end('Missing Data');
      }

      let movie = null;
      try {
        movie = JSON.parse(body);
      } catch (e) {
        res.statusCode = 400;
        return res.end('Bad Request');
      }

      if (!movie.genre) {
        movie.genre = 'unknown';
      }

      if (!movie.title) {
        res.statusCode = 400;
        return res.end('Missing Title');
      } if (movieList.some((item) => item.title === movie.title)) {
        res.statusCode = 409;
        return res.end('Exist Already');
      }

      movieList.push(movie);
      res.statusCode = 201;
      return res.end('Created');
    });
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
};

module.exports = { moviesHandler, movieHandler };

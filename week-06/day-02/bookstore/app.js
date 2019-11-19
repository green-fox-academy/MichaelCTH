const express = require('express');
const mysql = require('mysql');
const path = require('path');

const PORT = 3000;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const dbConfigure = {
  host: '122.51.72.108',
  user: 'jsa',
  password: 'jsa2019epamsuzhou',
  database: 'JSA_EPAM',
};

const sqlCon = mysql.createConnection(dbConfigure);
sqlCon.connect();

const bookTitleQuery = 'SELECT book_name FROM book_mast';
const bookQuery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
                    FROM book_mast
                    LEFT JOIN author on author.aut_id = book_mast.aut_id
                    LEFT JOIN category on category.cate_id = book_mast.cate_id
                    LEFT JOIN publisher on publisher.pub_id = book_mast.pub_id`;

const parseQueryParam = (query) => {
  let cusQuery = bookQuery;
  const condition = [];
  if (query.category) {
    condition.push(`cate_descrip = '${query.category}'`);
  }

  if (query.publisher) {
    condition.push(`pub_name = '${query.publisher}'`);
  }

  if (query.plt) {
    const price = parseInt(query.plt, 10);
    if (!price) {
      return null;
    }
    condition.push(`book_price < ${price}`);
  }

  if (query.pgt) {
    const price = parseInt(query.pgt, 10);
    if (!price) {
      return null;
    }
    condition.push(`book_price > ${price}`);
  }

  if (condition.length > 0) {
    cusQuery += ' where ';
  }
  cusQuery += condition.join(' and ');
  return cusQuery;
};


app.get('/titles', (req, res) => {
  sqlCon.query(bookTitleQuery, (err, result) => {
    if (err) {
      return res.send(err.message);
    }

    const conType = req.headers['content-type'];
    if (conType && conType.indexOf('application/json') >= 0) {
      res.json(result);
    } else {
      res.render('titles', { result });
    }
  });
});

app.get('/books', (req, res) => {
  const cusQuery = parseQueryParam(req.query);
  if (!cusQuery) {
    return res.sendStatus(400);
  }

  sqlCon.query(cusQuery, (err, result) => {
    if (err) {
      return res.send(err.message);
    }

    const conType = req.headers['content-type'];
    if (conType && conType.indexOf('application/json') >= 0) {
      res.json(result);
    } else {
      res.render('books', { result });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port :: ${PORT}`);
});

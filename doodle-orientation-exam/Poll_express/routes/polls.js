const express = require('express');
const sqlCon = require('../db/db');
const query = require('../db/queryString');

const router = express.Router();

router.get('/', (req, res) => {
  sqlCon.query(query.GET_POLL_LIST, (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    }
    res.json(result);
  });
});

module.exports = router;

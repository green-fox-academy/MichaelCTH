const express = require('express');
const sqlCon = require('../db/db');
const query = require('../db/queryString');

const router = express.Router();


router.post('/:optionID', (req, res) => {
  const { optionID } = req.params;
  if (isNaN(optionID)) {
    return res.sendStatus(400);
  }

  sqlCon.query(query.ADD_VOTE + query.GET_POLL_BY_OPTION_ID, [optionID, optionID], (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    }
    res.json(result[1]);
  });
});

module.exports = router;

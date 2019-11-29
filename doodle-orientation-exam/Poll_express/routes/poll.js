const express = require('express');
const sqlCon = require('../db/db');
const query = require('../db/queryString');

const router = express.Router();

router.get('/', (req, res) => {
  sqlCon.query(query.GET_ONE_POLL, [1], (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    }

    res.json({
      question: result[0].question,
      options: result.map((item) => ({ id: item.id, name: item.name, votes: item.votes })),
    });
  });
});

router.post('/', (req, res) => {
  const { question, options } = req.body;

  if (!question || !options || options.length < 2) {
    return res.sendStatus(400);
  }
  sqlCon.query(query.ADD_POLL, [question], (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    }

    const questionID = result.insertId;
    let cusQuery = query.ADD_OPTIONS;
    cusQuery += options.map((item) => `('${item}',${questionID})`).join(',');
    // console.log(`${cusQuery};`);
    sqlCon.query(cusQuery, (err2, result2) => {
      if (err2) {
        console.error(err2.message);
        res.sendStatus(500);
      }
      res.statusCode = 201;
      res.json(questionID);
    });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    console.log(id);
    return res.sendStatus(400);
  }
  sqlCon.query(query.GET_ONE_POLL, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    }

    res.json({
      question: result[0].question,
      options: result.map((item) => ({ id: item.id, name: item.name, votes: item.votes })),
    });
  });
});

module.exports = router;

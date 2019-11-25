const express = require('express');
const queryString = require('../db/routines');
const con = require('../db/db');

const router = express.Router();

router.get('/', (req, res) => {
  con.query(queryString.GET_LIST_OF_POSTS, (error, results) => {
    if (error) {
      console.log(`Error:: failed to query from database. Detail: ${error.message}`);
      return res.sendStatus(500);
    }
    res.json({ posts: results });
  });
});

router.post('/', (req, res) => {
  const { title, url, user } = req.body;
  if (!title) {
    return res.status(400).end('title is required in post body');
  }

  const timestamp = new Date().getTime();
  con.query(queryString.ADD_POST, [title, url, timestamp, user], (error, results) => {
    if (error) {
      console.log(`Error:: failed to query from database. Detail: ${error.message}`);
      return res.sendStatus(500);
    }
    const id = results.insertId;
    res.status(201).json({
      id, title, url, timestamp, score: 0, owner: user, vote: 0,
    });
  });
});

function setVote(req, res, voteVal, resultQuery) {
  const { id } = req.params;
  const { user } = req.body;

  con.beginTransaction(() => {
    con.query(queryString.RM_VOTE + queryString.ADD_VOTE + resultQuery, [user, id, user, id, voteVal, id], (error, results) => {
      if (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2') {
          con.rollback();
          return res.status(404).end('Post not found.');
        }

        console.log(`Error:: failed to query from database. Detail: ${error.message}`);
        con.rollback();
        return res.sendStatus(500);
      }
      con.commit();
      res.json(results[2]);
    });
  });
}

router.put('/:id/upvote', (req, res) => setVote(req, res, 1, queryString.GET_POST_BY_ID));

router.put('/:id/downvote', (req, res) => setVote(req, res, -1, queryString.GET_POST_BY_ID));

router.get('/:id/comments', (req, res) => {
  const { id } = req.params;
  con.query(queryString.GET_POST_BY_ID + queryString.GET_LIST_OF_COMMENT_BY_POSTID, [id, id], (error, results) => {
    if (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(404).end('Post not found.');
      }

      console.log(`Error:: failed to query from database. Detail: ${error.message}`);
      return res.sendStatus(500);
    }
    res.json({ ...results[0], comments: results[1] });
  });
});

router.post('/:id/comments', (req, res) => {
  const { id } = req.params;
  const { text, user } = req.body;
  const timestamp = new Date().getTime();
  con.query(queryString.ADD_COMMENT, [id, id, text, timestamp, user], (error, results) => {
    if (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(404).end('Post not found.');
      }

      console.log(`Error:: failed to query from database. Detail: ${error.message}`);
      return res.sendStatus(500);
    }
    res.status(201).json({
      id: results.insertId, text, score: 0, owner: user, timestamp,
    });
  });
});

router.put('/:id/comments/:vote', (req, res) => {
  const { vote } = req.params;
  if (vote === 'upvote') {
    return setVote(req, res, 1, queryString.GET_COMMENT_BY_ID);
  }
  return setVote(req, res, -1, queryString.GET_COMMENT_BY_ID);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  con.query(queryString.GET_POST_BY_ID + queryString.DEL_POST, [id, id, user], (error, results) => {
    if (error) {
      console.log(`Error:: failed to query from database. Detail: ${error.message}`);
      return res.sendStatus(500);
    }

    if (results[1].affectedRows === 0) {
      return res.status(404).end('Post not found');
    }

    res.json(results[0]);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, url } = req.body;
  const timestamp = new Date().getTime();

  if (!title) {
    return res.status(400).end('title is required in post body');
  }

  con.query(queryString.UPDATE_POST + queryString.GET_POST_BY_ID, [title, url, timestamp, id, id], (error, results) => {
    if (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(404).end('Post not found.');
      }

      console.log(`Error:: failed to query from database. Detail: ${error.message}`);
      return res.sendStatus(500);
    }

    res.json(results[1]);
  });
});

module.exports = router;

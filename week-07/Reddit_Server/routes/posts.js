const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.end('posts root');
});

module.exports = router;

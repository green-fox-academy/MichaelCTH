const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);

const voteRouter = require('./routes/vote');
const pollRouter = require('./routes/poll');
const pollsRouter = require('./routes/polls');

// middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/poll', pollRouter);
app.use('/vote', voteRouter);
app.use('/polls', pollsRouter);

// server startup
app.listen(PORT, () => {
  console.log(`Server is running on port::${PORT}`);
});

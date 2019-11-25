const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);

const indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes setup
app.use('/', indexRouter);
app.use('/posts', postRouter);

// server startup
app.listen(PORT, () => {
  console.log(`Server is running on port::${PORT}`);
});

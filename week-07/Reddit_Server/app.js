const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);

const indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/', indexRouter);
app.use('/posts', postRouter);

// server startup
app.listen(PORT, () => {
  console.log(`Server is running on port::${PORT}`);
});

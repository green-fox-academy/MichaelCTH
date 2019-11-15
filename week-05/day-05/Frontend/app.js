const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  console.log(req.query.input);
  if (req.query.input) {
    res.json({
      received: req.query.input,
      result: req.query.input * 2,
    });
  } else {
    // 400
    res.json({ error: 'Please provide an input!' });
  }
});

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  if (name && title) {
    res.json({
      welcome_message: 'Oh, hi there petike, my dear student!',
    });
  } else if (name) {
    res.json({ error: 'Please provide a title!' });
  } else if (title) {
    res.json({ error: 'Please provide a name!' });
  } else {
    res.json({ error: 'Please provide a name and a title!' });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  res.json({ appended: `${appendable}a` });
});

const factorial = (n) => ((n !== 1) ? n * factorial(n - 1) : 1);

app.post('/dountil/:action', (req, res) => {
  let { until } = req.body;
  until = parseInt(until, 10);
  const { action } = req.params;
  if (until) {
    if (action === 'sum') {
      res.json({
        result: (until + 1) * (until / 2),
      });
    } else if (action === 'factor') {
      res.json({
        result: factorial(until),
      });
    } else {
      res.json({
        error: 'Unknown action!',
      });
    }
  } else {
    res.json({
      error: 'Please provide a number!',
    });
  }
});

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;
  let resContent = null;
  switch (what) {
    case 'sum':
      resContent = { result: numbers.reduce((pre, next) => pre + next) };
      break;
    case 'multiply':
      resContent = { result: numbers.reduce((pre, next) => pre * next) };
      break;
    case 'double':
      resContent = { result: numbers.map((val) => val * 2) };
      break;
    default:
      resContent = { error: 'Please provide what to do with the numbers!' };
  }
  res.json(resContent);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

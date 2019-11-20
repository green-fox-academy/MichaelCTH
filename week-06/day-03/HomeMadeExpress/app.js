const fakeExpress = require('./fake-express');

const PORT = 3000;

const app = fakeExpress();

app.get('/', (req, res) => {
  res.set('It-Is-A-Header', 'Michael');
  res.send('Everything is OK');
});

app.post('/', (req, res) => {
  res.send('Post Hello');
});

app.get('/my-endpoint/variable', (req, res) => {
  // this prints the value of the path variable
  console.log(req.params.variable);
  // this prints the query params in an object
  console.log(req.query);
  // this prints the query body in an object, it is enough if you handle only JSON body
  console.log(req.body);

  res.send('Everything is OK');
});

app.listen(PORT, () => console.log(`App is running on ${PORT}`));

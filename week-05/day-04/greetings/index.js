let express = require('express');
let app = express();
let PORT = 3000;

app.set('view engine','ejs');

app.get('/', (req, res) => {
  let name = 'Guest';
  if(req.query.name){
    name = req.query.name;
  }
  res.render('home', { name });
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});

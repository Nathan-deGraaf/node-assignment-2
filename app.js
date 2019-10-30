const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname + '/assets')));

app.use(express.urlencoded({extended: true}));

app.use(express.json());


app.get('/', (req, res) => {
  res.render('index', {
    nav: pageInfo
  });
});


app.get('/:page', (req, res) => {
  res.render(req.params.page, {
    nav: pageInfo
  });
});


app.post('/submit-form', (req, res) => {
  res.render('thankYou', {
    name: req.body.name,
    email: req.body.email
  });
})


app.use((err, req, res, next) => {
  res.locals.head = err.head;
  res.status(err.status || 404);
  res.render('error404');
});


const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



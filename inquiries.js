
const fs = require('fs')

const inquiries = (req, res, next) => {
  if (req.method === 'POST') {

  const data = {name: req.body.name, email: req.body.email};
  const message = JSON.stringify(data);

  fs.appendFile('./logs/form-inquiries.log', message + '\n', err => {

    if (err) throw err;
    console.log('Logged Successfully!');

    });
  }
    next()
}

module.exports = inquiries
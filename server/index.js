// TODO: Create an express server

const express = require('express');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on port ${port}`);
  }
});

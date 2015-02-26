var express = require('express'),
  instant = require('instant'),
  colors = require('colors'),
  app = express();

app.use(instant(__dirname));
app.listen(3000,
  console.log('Navigate to ' + 'http://localhost:3000'.green + ' to view your page.')
);

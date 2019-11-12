var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<img src="https://i1.rgstatic.net/ii/profile.image/277080219635712-1443072480340_Q512/Claudio_Nunes3.jpg" > </img> <h1>Hello Claudion!</h1>');
});

app.listen(3000, function () {
    console.log('Conectado na porta 3000!');
  });
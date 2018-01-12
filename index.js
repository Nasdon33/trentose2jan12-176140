var express = require('express');
var bodyParser = require('body-parser');

//instantiate express
var app = express();

app.use(bodyParser.json());

const astronauts = require('./astronauts')

app.use('/astronauts', astronauts);

app.set('port', (process.env.PORT || 8080));

//listen in a specific port
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
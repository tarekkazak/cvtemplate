var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
app = express();
app.use(express.static('.'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile('./index.html');
}); 

app.post('/save', function(req, res) {
	writeData(req.body);
});

function writeData(data) {
    fs.writeFile('./data/content.json', JSON.stringify(data), 'utf-8', function(err) {
     if(err) {
        throw err;
     }
    });
}
app.listen('8090');

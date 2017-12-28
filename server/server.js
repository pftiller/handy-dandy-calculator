const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculate = require( './calculate' );
const port = 5000;

app.use(express.static('server/public'));
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get('/calculate', function(req, res){
    res.send(calculate.calculateEquation());
})

app.post('/calculate', function(req, res){
    //console.log('body: ', req.body);
    calculate.calculateEquation(req.body);
});


app.listen(port, function(){
    console.log('server is up on', port);
});


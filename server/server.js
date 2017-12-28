const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('server/public'));


app.listen(port, function(){
    console.log('server is up on', port);
});


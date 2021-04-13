const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.listen(port, () => console.log('App ready on localhost:' + port))

app.get(/^(.+)$/, function(req, res){
    console.log('static file require: ' + req.params);
    res.sendFile(__dirname + req.params[0]);

})
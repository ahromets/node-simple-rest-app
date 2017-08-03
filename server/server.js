var port = 7000;
var express = require('express');
var app = new express();

app.route('/api')
.get(function (req, res) {
    res.status(200).send('This is the API');
});

app.listen(port, function () {
    console.log('App is listening on port ' + port);
})
var port = 7000;
var express = require('express');
var app = new express();

app.route('/api')
.get(function (req, res) {
    res.status(200).send('This is the API');
});

var items =
    [
        {
            name: 'Let It Be',
            link: 'https://google.com',
            rank: 1
        },
        {
            name: 'Hey Jude',
            link: 'https://google.com',
            rank: 2
        },
        {
            name: 'Get Back',
            link: 'https://google.com',
            rank: 3
        }
    ];

app.route('/api/items')
.get(function (req, res) {
    res.status(200).json(items)
})
.post(function (req, res) {
    
})


app.listen(port, function () {
    console.log('App is listening on port ' + port);
})
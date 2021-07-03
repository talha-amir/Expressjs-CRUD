var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())



require('./app/routes/customer.routes.js')(app);

// Create a Server
// var server = app.listen(8081, function () {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("App listening at http://%s:%s", host, port)

// })

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function () {
    console.log('Listening on port %d', server_port);
});
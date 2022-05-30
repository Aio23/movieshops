const express = require('express');
const session = require('express-session');
const routes = require('./routes/routes');

let port = 3000;

let app = express();

app.use(routes);

app.listen(port, function() {
    console.log('Server running on port ' + port);
});
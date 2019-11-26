const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('main');
});

http.listen(port, (req, res) => {
    console.log(`Server connected in *: ${port}`);
});



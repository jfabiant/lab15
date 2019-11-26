const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(http);

app.set('view engine', 'jade');

app.use('/static', express.static('public'));

io.on('connection', function (socket) {
    console.log('Usuario conectado');
    socket.on('disconnect', function () {
        console.log('Usuario desconectado');
    });
});

app.get('/', (req, res) => {
    res.render('main');
});

http.listen(port, (req, res) => {
    console.log(`Server connected in *: ${port}`);
});



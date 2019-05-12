var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');
var socket = require('socket.io')
var app = express();

app.use(cors());


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('hello world')
});

var server = http.createServer(app);
var io=socket.listen(server);

io.on('connection',(socket)=>{
    console.log('new client connected.');

    socket.emit('mess','Data from server');
    
    socket.on('disconnect',()=>{
    	console.log('A client disconnected.');
    });
});
server.listen(3000, () => {
	console.log("Server is up and listering on 3000");
});

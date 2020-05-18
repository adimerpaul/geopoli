// const app = require('./app');
// const http = require('http');
// const socketio = require('socket.io');
//
// const server = http.createServer(app);
// const io = socketio.listen(server);
// require('./sockets')(io);
// require('./database');
//
// async function main() {
//   await server.listen(app.get('port'));
//   console.log(`server on port ${app.get('port')}`);
// }
//
// main();
var cors = require('cors')
var express=require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path=require('path');
require('./database');
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('a');
});


http.listen(app.get('port'), function(){
    console.log('listening on *:'+app.get('port'));
});

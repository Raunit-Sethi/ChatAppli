const express = require("express");
const app = express();
var path = require('path')
var socket = require('socket.io')

var port = process.env.port || "8080"


const server = app.listen(port, ()=>{
    console.log("Listening to port ", port);
});
const io = socket.listen(server)

app.use(express.static(__dirname));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.get('/', (req,res) => {
  res.render('index')
})

io.on('connection', socket => {
  console.log('hoggers')
  socket.on('chatter', message => {
    console.log('message: ' + message);
    io.emit('chatter', message)
  })
})
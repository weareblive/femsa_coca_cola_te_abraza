const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  console.log(socket.id);
  socket.on('message', ({idmessage, name, message }) => {
    io.emit('message', {idmessage, name, message , id:socket.id})
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})

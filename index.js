const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('hoge')
})

app.get('/pomp', (req, res) => {
  console.log('pomp')
  io.emit('pomp')
  res.send('pomp')
})

io.on('connection', _ => {
  console.log('a user connected')
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})

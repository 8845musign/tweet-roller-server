const app = require('express')()
const http = require('http').Server(app)
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('hoge')
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})

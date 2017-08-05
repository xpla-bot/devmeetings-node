//#!/usr/bin/env node

const http = require('http')
// Moduł `fs` pozwoli nam czytać pliki
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const { url } = req

  console.log(url)

  if (url === '/' || url === '/index.html') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    // Wczytujemy plik *synchronicznie*
    res.end(fs.readFileSync('./static/index.html', 'utf8'))
  } else {
    res.writeHead(404)
    res.end('404: Not Found')
  }
})

server.listen(port, () => {
  console.log(`Listening on :${port}`)
})

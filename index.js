//#!/usr/bin/env node

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  // Za pomocą destructuring assignment wyciągamy URL
  const { url } = req

  // Logujemy na konsolę
  console.log(url)

  // 11/ Tworzymy prosty "router"
  if (url === '/' || url === '/index.html') {
    // 4/ Serwujemy plik HTML dla / i /index.html
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end('<h1>Hello World!</h1>')
  } else {
    // 2/ Zwracamy 404 w każdym innym przypadku
    res.writeHead(404)
    res.end('404: Not Found')
  }
})

server.listen(port, () => {
  console.log(`Listening on :${port}`)
})

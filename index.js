//#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const { url } = req

  console.log(url)

  // 6/ 2. Serwujemy każdy z plików naszego frontendu.
  if (url === '/' || url === '/index.html') {
    serveFile('index.html', 'text/html', res)
  } else if (url === '/main.js') {
    serveFile('main.js', 'application/javascript', res)
  } else if (url === '/styles.css') {
    serveFile('styles.css', 'text/css', res)
  } else {
    res.writeHead(404)
    res.end('404: Not Found')
  }
})

server.listen(port, () => {
  console.log(`Listening on :${port}`)
})

// 15/ 1. Przenosimy serwowanie pliku do funkcji pomocniczej
function serveFile (file, mime, res) {
  fs.readFile(`./static/${file}`, 'utf8', (err, content) => {
    if (err) {
      console.error(err)
      res.writeHead(500)
      res.end(`Internal Error`)
      return
    }

    res.writeHead(200, {
      'Content-Type': mime
    })
    res.end(content)
  })
}

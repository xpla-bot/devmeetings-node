//#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const { url } = req

  console.log(url)

  if (url === '/' || url === '/index.html') {
    // Jako 3 argument musimy podać callback - tam dopiero dostajemy przeczytany plik.
    fs.readFile('./static/index.html', 'utf8', (err, content) => {
      // 6/ Musimy obsłużyć błąd.
      if (err) {
        console.error(err)
        res.writeHead(500)
        res.end(`Internal Error`)
        return
      }

      // 4/ I poprawną odpowiedź
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(content)
    })
  } else {
    res.writeHead(404)
    res.end('404: Not Found')
  }
})

server.listen(port, () => {
  console.log(`Listening on :${port}`)
})

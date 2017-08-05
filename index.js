//#!/usr/bin/env node

// Za pomocą `require` możemy zaimportować wbudowane moduły i biblioteki
const http = require('http')
// Node v8.x ma pełne wsparcie dla ES6/ES2015 więc możemy korzystać np. z `const`
const port = process.env.PORT || 3000

// 3/ Tworzymy serwer, który zawsze odpowiada `Hello World`...
const server = http.createServer((req, res) => {
  res.end('Hello World!')
})

// 3/ ...i rozpoczynamy nasłuchiwanie na określonym porcie.
server.listen(port, () => {
  console.log(`Listening on :${port}`)
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>')
  res.send('<h2>Exercise 3.1!</h2>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
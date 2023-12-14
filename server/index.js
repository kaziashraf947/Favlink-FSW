const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./db')

const app = express();

const PORT = 3000
const clientPath = path.resolve(__dirname,'..' ,'client/dist')
app.get('/api/links', db.getLinks)
app.use(express.static(clientPath))
app.get('/', (req, res) => {
    // we'll do some stuff here
    res.sendFile(path.join(clientPath, 'index.html'));

  })
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
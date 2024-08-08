const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./router')

const app = express()
const port = 3000


app.use(helmet())
app.use(cors())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Node Express BoilerPlate App listening on port ${port}`)
})
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./router')
const sql = require("msnodesqlv8")



const app = express()
const port = 3000

const connectionString = "Server=localhost;Database=master;Trusted_Connection=True;"
const query = "SELECT * // INSITE TABLE NAME HERE"

sql.query(connectionString, query, (err, rows) => {
  console.log(rows)
})

app.use(helmet())
app.use(cors())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Node Express BoilerPlate App listening on port ${port}`)
})
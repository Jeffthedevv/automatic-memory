const express = require('express');
const router = express.Router();


  router.get('/routes', (req, res) =>{
    res.send("Routes Module Responding Successsfully")
  })

  router.get('/', (req, res) => {
    res.send('Hello World')
  })

module.exports = router
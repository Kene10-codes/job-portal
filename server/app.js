const express = require('express') // IMPORT EXPRESS
const http = require('http') // IMPORT HTTP
const app = express() // INIT EXPRESS

require('./services/routes')(app)

const server = http.createServer(app)

// MODULE EXPORT EXPRESS
module.exports = server

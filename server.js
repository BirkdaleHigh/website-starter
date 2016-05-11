var express = require('express')
var app = express()
var http = require('http').Server(app)
var os = require('os')

app.use( express.static(__dirname) )

http.listen(3000, '0.0.0.0', function(){
  console.log(`listening on ${ os.hostname() } at: ${http.address().port}`)
})

var express = require('express')
var app = express()
var http = require('http').Server(app)

app.use( express.static(__dirname) )

http.listen(3000, '0.0.0.0', function(){
  console.log(`listening on ${http.address().address} at: ${http.address().port}`)
})

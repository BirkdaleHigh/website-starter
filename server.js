var liveServer = require("live-server")
var os = require('os')

var options = {
  port: 3000,
  host: '0.0.0.0',
  root: __dirname,
  open: false,
  logLevel: 2,
  ignore: '.*/node_modules/.*'
}

liveServer.start(options)

console.log(`listening on ${ os.hostname() } at: ${options.port}`)

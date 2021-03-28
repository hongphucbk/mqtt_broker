require('dotenv').config()
const aedes = require('aedes')({
  authenticate: (client, username, password, callback) => {



  },
  authorizePublish: (client, packet, callback) => {

  },

  authorizeSubscribe: (client, packet, callback) => {

  }

})

const server = require('net').createServer(aedes.handle)
const port = process.env.MQTT_BROKER_PORT

server.listen(port, function () {
  console.log('MQTT Server started and listening on port ', port)
})


aedes.on('clientError', function (client, err) {
  console.log('client error', client.id, err.message, err.stack)
})

aedes.on('connectionError', function (client, err) {
  console.log('client error', client, err.message, err.stack)
})

aedes.on('publish', function (packet, client) {
  if (client) {
    console.log('message from client', client.id)
  }
})

aedes.on('subscribe', function (subscriptions, client) {
  if (client) {
    console.log('subscribe from client', subscriptions, client.id)
  }
})

aedes.on('client', function (client) {
  console.log('new client', client.id)
})



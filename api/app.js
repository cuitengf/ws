const WebSocket = require('ws');

const wss1 = new WebSocket.Server({ port: 8080 })
const wsServer = new WebSocket('ws://127.0.0.1:8081')

wss1.on('connection', function connection(ws) {
  // ...
  ws.on('message', (res) => {
    wsServer.send(res)
  })

  wsServer.on('open', function open() {
    console.log('connected');
  });

  wsServer.on('close', function close() {
    console.log('disconnected');
  });

  wsServer.on('message', function incoming(data) {
    console.log(`Roundtrip time: ${Date.now()} ms`);
    console.log(data);
    ws.send(data)
  });
});


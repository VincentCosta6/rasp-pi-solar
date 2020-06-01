const WebSocket = require('ws')

const { nginx } = require("./config.json")
 
const wss = new WebSocket.Server({
  port: 42069,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed.
  }
});

wss.on("connection", (ws, req) => {
    const client_ip = nginx ? 
        req.headers['x-forwarded-for'].split(/\s*,\s*/)[0] : 
        req.socket.remoteAddress

    ws.on("message", message => handleMessage({
        client_ip,
        message
    }))
})

const handleMessage = info => {
    console.log(info)
}
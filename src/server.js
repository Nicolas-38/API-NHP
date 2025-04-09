import http from'node:http'

//para importação http pode ser usado const http = requeri('http') ou import http from'http'
//comomJS => require
//Aplicações HTTP = APIs

const server = http.createServer((req, res) => {
return res.end("Hello world")
})

server.listen(5555)

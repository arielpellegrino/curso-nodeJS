const http = require('http');
const port = 8181;
http.createServer(function (requisicao, resposta) {
    resposta.end("<h1> OLá mundo </h1> <br> Ariel")
    
}).listen(8181);

console.log("meu servidor está rodando na porta", port)
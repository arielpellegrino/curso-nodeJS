const express = require('express'); //importando mando o express para dentro do projeto
const app = express(); //iniciando todo express para dentro do projeto
const port = 4000;

// app.get("/", function(req, res){
//     res.send("Hello Word express");
// });

// app.get("/blog", function(req, res){
//     res.send('Pagina de blog');
// })

//QueryParam
app.get("/canal/youtube", function (req, res) {
    const canal = req.query["canal"]

    if (canal) {
        res.send(canal);
    }
    res.send("nenhum canal fornecedio");

})

//Parametro obrigatorio
app.get("/ola/:nome/:empresa", function (req, res) {
    const nome = req.params.nome;
    const empresa = req.params.empresa;

    res.send("<h1> oi " + nome + " que trabalha na empresa " + empresa + "</h1>");
})

//parametro não obrigatorio
app.get("/hellow/:artigo?", function (req, res) {
    const artigo = req.params.artigo;

    if (artigo) {
        res.send("<h1> Artigo: " + artigo + "</h1>")
    } else {
        res.send("<h1>  artigo  </h1>");
    }

})


app.listen(port, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})
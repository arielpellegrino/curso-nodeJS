function soma(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b
}

const nome = "minha calc"

//export default soma;
//module.exports = soma;

module.exports = {
    soma,
    multi,
    nome
}
let calc = require("./calc.js");

console.log(calc.nome)
console.log(calc.soma(1, 2))
console.log(calc.multi(2,2))
calc.nome = 'minha calculadora';

console.log(calc.nome)

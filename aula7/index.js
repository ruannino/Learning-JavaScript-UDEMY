// Não podemos criar constates com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não pode conter espaçoes ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// Não utilize VAR, utilize CONS

// String = Text | Number = Número

const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero, primeiroNumero);

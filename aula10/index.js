// Aritméticos [ + - * / ** % ]
/*
Incremento = ++ +=
Decremento = -- -+
*/

const num1 = 5;
const num2 = 10;
const num3 = 15;
console.log(num1 ** (num2 / num3));

const passo = 50;
let contador = 0;
contador += passo; // contador = contador + passo;
console.log(contador);

let contador2 = 2;
contador2 **= 10;
console.log(contador2);

const num4 = 10;
const num5 = 'Luiz';  // NaN - Not a number
console.log(num4 * num5);
console.log(typeof num5);

// parseInt (inteiro), parseFloat (decimais)

const num6 = 10;
const num7 = parseInt('5');
console.log(num6 * num7);
console.log(typeof num7);

const num8 = 10;
const num9 = parseFloat('5.7');
console.log(num8 + num9);
console.log(typeof num9);
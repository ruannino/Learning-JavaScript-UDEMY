/*
Primitivos (imutáveis) - String, Number, Boolean, Undefined, Null, ( Bigint, Symbol) - Valores copiados

Referência (mutável) - Array, Object, Function - Passados por referência
*/

let a = [1,2,3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Ruan');
console.log(variavel);

// __________________________________

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(1, 2));
console.log(soma(-2, 5));
console.log(soma(0, 9));

// __________________________________
// const raiz = n => n ** 0.5;   <- Arrow Function

const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
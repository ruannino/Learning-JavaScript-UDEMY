//            0123456789...
const nome = 'Ruannino Farias'
console.log(nome[0]);

//              0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Maria'
alunos[alunos.length] = 'Fábio'
alunos[alunos.length] = 'Luana'
alunos.push('Otávio');
alunos.unshift('Farias');
const removido1 = alunos.pop();
const removido2 = alunos.shift();
delete alunos[1];


console.log(alunos.length);

console.log(removido1);
console.log(removido2);
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -3));
console.log(typeof alunos);
console.log(alunos instanceof Array);

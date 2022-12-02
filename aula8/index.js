/*
Ruannino Farias tem 31 anos, pesa 78 kg e tem
1.73 de altura e seu IMC é de 26.061679...
Ruannino nasceu em 1991
*/

const nome = 'Ruannino';
const sobrenome = 'Farias';
const idade = 31;
const peso = 78;
const alturaEmMt = 1.73;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmMt * alturaEmMt);
anoNascimento = 2022 - idade;

// Template Strings
console.log(`${nome} ${sobrenome}, 
    tem ${idade} anos, pesa ${peso} kg e
    tem ${alturaEmMt} de altura e seu IMC é de ${imc}. 
    ${nome} nasceu em ${anoNascimento}.`);
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// [varA, varB, varC] = [varB, varC, varC]; -> Solução 2
// console.log(varA, varB, varC);
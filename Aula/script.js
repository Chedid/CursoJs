/* 
let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
alert(`O resultado da soma é ${resultado}`);

*/
/* 

 let varA = 'A'; //b
 let varB = 'B'; //c
 let varC = 'C'; //a
 let aux  = 'A';
 varA = varB;    //a = b
 varB = varC;    //b = c
 varC = aux;
 alert(`varA é ${varA} varB é ${varB} varC é ${varC}`);

 [varA, varB, varC] = [varB, varC, varA]


 
                 01234567
let umaString = "Um texto";
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia. `);

//string
let umaFrase = "O rato roeu a roupa do rei de roma";
//vai separar todas as palavras entre espaço.. 'o' 'rato' 'roeu'
cosole.log(umaFrase.split(' '));
//Caixa alta
cosole.log(umaFrase.toUpperCase);
//Caixa baixa 
cosole.log(umaFrase.toLowerCase);

*/


/*  ----> UM POUCO DE NUMBER <----
     
    */
   let num1 = 1;
   let num2 = 3.5;
   console.log(num1.toString() + num2);
   num1 = num1.toString();       /*converter a variavel para string*/
   console.log(num1.toString(2)) /*Representação binaria*/
   console.log(num1.toFixed(2)) /*Limita a 2 casas decimais*/
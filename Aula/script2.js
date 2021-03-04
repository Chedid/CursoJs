let num1 = 9.3445547;
let num2 = Math.floor(num1); //Arredonda para baixo
let num2 = Math.ceil(num1);  //Arredonda para cima
let num2 = Math.round(num1); //Arredonda pra cima valores maiores que x.50 

/* ARRAYS */

//                0       1      2       3
const alunos = ['Yago','Maria','João','Paulo'];



console.log(alunos instanceof Array);  //verificar se é Array
console.log(alunos.slice(0, -2)); //remover os ultimos dois 

alunos.shift();                    //Remove o primeiro do Array
alunos.pop();                    //Remove o ultimo do Array
let nomeRemovido = alunos.pop(); //Remove o ultimo do Array e joga para a variavel 
alunos.unshift('Jose');//Adiciona no começo 


alunos.push('Luiza'); //Adiciona no fim 
alunos.push('Marcos');//Adiciona no fim 


alunos[alunos.length] = 'Luiza'; //Adiciona no fim 
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Lizandra';

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

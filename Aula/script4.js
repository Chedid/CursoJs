function criaPessoas (nome, sobrenome, idade){

   return{
    nome: nome,
    sobrenome: sobrenome,
    idade: idade

    
    }
};

const pessoa1 = {
    nome: 'Yago',
    sobrenome: 'Chedid',
    idade: 25,

    fala() {
      console.log(`Meu nome é ${this.nome}`);  
    }
};

pessoa1.fala();




criaPessoas('Yago','Rogerio','21',);

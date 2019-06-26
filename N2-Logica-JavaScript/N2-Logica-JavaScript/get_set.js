class Mulher {
    constructor(nome, anoNascimento) {
      this._nome = nome
      this._anoNascimento = anoNascimento
    }
    get nome() {
      return this._nome;
    }
    set nome(novo_nome) {
      this._nome = novo_nome;
    }
  
    get anoNascimento() {
  return this._anoNascimento;
    }
    set anoNascimento(novo_ano) {
      this._anoNascimento = novo_anoNascimento;
    }
    
  }
  
  let eu = new Mulher('Fabi', 1978);
  
  eu //acessando classe
  
  eu._nome //propriedade classe
  eu._anoNascimento //propriedade classe
  
  eu._nome = 'Fabi Ferlin' //acessando com get e set
  
  eu // atribuido novo nome
   
  eu._anoNascimento = 1980
  
  eu
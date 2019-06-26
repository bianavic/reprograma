/* class Canetao {
    constructor(_marca, _cor) {
        this.marca = _marca;
        this.cor = _cor;
        this.tampada = true;
        this.escrevendo = false;
    }

// alternativa de codigo para condição, if e else
// condição == true? console.log('verdadeiro') : console.log('falso')

// abaixo existe uma função mas sem a palavra function ela já é reconhecida
    escrever () {
        if (tampada == false) {
            console.log('Estou escrevendo')
        }else{
            console.log('Erro:Você deve destampar antes de escrever')
        }
    }

        destampar() {
            this.tampada?this.tampada = false:console.log('O canetao já está sem tampa!')
    }
    
    }
    
    let canetao1 = new Canetao()
    
    let canetao2 = new Canetao('Pilot', 'azul')
    
    canetao2

canetao2.brilhaNoEscuro = true //criada nova propriedade
canetao2

Canetao.carregavel = true
Canetao

canetao2.voador = true
canetao2

let canetao3 = new Canetao('Bic', 'violeta')
canetao3

canetao3.multiuso = true
canetao3

let canetao4 = new Canetao('Tampax', 'vermelho')
canetao4

canetao4.adaptavel = true
canetao4

// metodo para acessar e alterar propriedades

 */

// condicao == true? console.log('verdadeiro'):console.log('false')
/* 
class Canetao{
	constructor(_marca, _cor){
		this.marca = _marca,
		this.cor =_cor,
		this.tampada =true,
		this.escrevendo = false
    }
    escrever(){ //function
        if (this.tampada == false){
            console.log('Estou escrevendo')
            this.escrevendo = true;
        }else{
        console.log('Erro:Você deve destampar antes de escrever')
        }
    }

    destampar(){
        this.tampada?this.tampada = false:console.log('O canetao já está sem tampa!')
    }

    tampar(){
        if (this.tampada){
            console.log('O canetao já está com tampa!')
        }else {
            this.tampada = true
            if(this.escrevendo) {
                this.escrevendo = false;
            }
        }
    }

}


let canetao1 = new Canetao('Pilot','Azul')
console.log(canetao1)

canetao1.escrever()
console.log(canetao1)
canetao1.destampar()
console.log(canetao1)
canetao1.escrever()
console.log(canetao1)
canetao1.tampar()
console.log(canetao1)
 */

 // condicao == true? console.log('verdadeiro'):console.log('false')

// condicao == true? console.log('verdadeiro'):console.log('false')

/* class Canetao{
	constructor(_marca, _cor){
		this.marca = _marca,
		this.cor =_cor,
		this.tampada =true,
		this.escrevendo = false
    }
    escrever(){ //function
        if (this.tampada == false){
            console.log('Estou escrevendo')
            this.escrevendo = true;
        }else{
        console.log('Erro:Você deve destampar antes de escrever')
        }
    }

    destampar(){
        this.tampada?this.tampada = false:console.log('O canetao já está sem tampa!')
    }

    tampar(){
        if (this.tampada){
            console.log('O canetao já está com tampa!')
        }else {
            this.tampada = true
            if(this.escrevendo) {
                this.escrevendo = false;
            }
        }
    }

    // acessar a ppropriedade de maneira indireta utiliza get marca() {etc} e get cor() {etc}
             
    set Marca(nova_marca) {
        this.Marca = nova_marca
        return this.Marca
      }
    
      get Cor() {
         this.Cor = nova_cor
       return this.Cor
      }
  
  }

let canetao1 = new Canetao('Pilot','Azul')
console.log(canetao1)

canetao1.escrever()
console.log(canetao1)
canetao1.destampar()
console.log(canetao1)
canetao1.escrever()
console.log(canetao1)
canetao1.tampar()
console.log(canetao1)

canetao1.getCor()
 */


class Pessoa{
    constructor(_nome, _idade){
        this.nome = _nome,
        this.idade = _idade
    }

    static programar() {
        console.log('Estou codando loucamente')
    }
}

let mulherMaravilhosa = new Pessoa('Jo', 35)
Pessoa.programar()


// Criar classe animal e estender para cachorro

class Animal{
    constructor(_patas, _ambiente){
    this.patas = _patas, 
this.ambiente = _ambiente
}
reproduz(){
console.log('Nhanho')
}

}

class Cachorro extends Animal{
  constructor(_patas, _ambiente, _raca){
     super(_patas, _ambiente)
    this.raca = _raca
  }
  latir(){console.log('Au au au')}
}


class ViraLata extends Cachorro{
    constructor(_patas, _ambiente, _raca){
       super(_patas, _ambiente)
      this.patas = _patas
    }
    brincar(){console.log('Yay')}
  }
  
  
  
  let dorg = new Cachorro(4, 'terrestre', 'Fila')
  dorg
  
  dorg.latir()
  dorg.reproduz()
  
  let tombalata = new ViraLata(4, 'casa', 'vira-lata')
  tombalata
  
  tombalata.latir()
  tombalata.reproduz()
  tombalata.brincar()
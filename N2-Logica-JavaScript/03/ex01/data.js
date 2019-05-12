let listaProdutos = [];

// objetos: sao cada produto
// Objeto nao retorna tudo na ordem
let brusinha = {
    tamanho: ['P', 'M', 'G', 'GG'],
    cor: 'preta',
    modelo: 'babylook',
    descricao: 'camiseta Reprograma estilo diva function',
    preco: 35,
    // criar um metodo que pode ser function
    descrevaMe: function () { alert(`${this.descricao} - Preço R$ ${this.preco}`) }
}
// outro modelo de funcao
// descrevaMe2(){alert(this.descricao + '' ' - Preco R$ ' + this.preco)}

// retorna valor retornado dentro do objeto
//console.log(camiseta.descricao);

// Os objetos seguintes podem conter quaisquer atributos desde que tenha descricao e preço 
let adesivo = {
    formato: 'retangular',
    cor: 'lilas',
    modelo: 'simples',
    descricao: 'adesivo Reprograma',
    preco: 15
    //descrevaMe: function(){alert(`${this.descricao} - Preco R$ ${this.preco}`)
}

let caneca = {
    material: 'ceramica',
    cor: 'preta',
    modelo: 'caneca',
    descricao: 'caneca Reprograma',
    preco: 25
}

listaProdutos.push(brusinha, adesivo, caneca);

/*
const app = document.getElementsByClassName('section');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container); */

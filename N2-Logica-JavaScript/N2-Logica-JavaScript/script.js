/* var escopoGlobal = 'global'

function testarEscopo () {
console.log('Acessando a variavel escopoGlobal', escopoGlobal)
var escopoLocal = 'local'
console.log('Acessando a variavel escopoLocal de dentro', escopoLocal)
}

testarEscopo();
console.log('Acessando a variavel escopoLocal de fora', escopoLocal)
*/

/* let escopoGlobal = 'global'

for (var i =0; i<5;i++) {
    console.log(i, escopoGlobal)
}
console.log('acessando o i de fora - que é um vazamento de memoria') */

// verificar porque o let abaixo nao dá erro com o console.log

/* let escopoGlobal = 'global'

for (let i=0; i<5;i++) {
    console.log(i, escopoGlobal)
}
console.log('acessando o i de fora') */

/* function testarEscopo () {
console.log('Acessando a variavel escopoGlobal', escopoGlobal)
var escopoLocal = 'local'
console.log('Acessando a variavel escopoLocal de dentro', escopoLocal)
}

testarEscopo();
console.log('Acessando a variavel escopoLocal de fora', escopoLocal) */

/* var nome = 'Jo'
console.log(nome)

var nome = 'Fabi'
console.log(nome)

let nome = 'Jo'
console.log(nome)

let nome = 'Fabi'
console.log(nome) */

let pessoa = {
    nome: 'Fabi'
    idade: 35
    altura:1.50
    andar: function {
        console.log('Andando'),
    },
    falar()=> {console.log('Blablabla')}
    comer() {console.log('Nhanhanha')}
}
pessoa.falar()
pessoa.andar()
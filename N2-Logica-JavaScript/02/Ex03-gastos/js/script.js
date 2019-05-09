// Inputs (Elementos do DOM)

/* var inputTransacao = document.querySelector('#transacaoInputDate');
var inputValor = document.querySelector('#transacaoInputMoney');
var inputData = document.querySelector('#transacaoInputDate');
 */
// abaixo temos a opoção com getElementById
// var inputTransacao = document.getElementById('transacaoInputDate')


//console.log(inputTransacao)
/* console.log(inputTransacao)
console.log(inputValor)
console.log(inputData) */


// valores dos inputs
/* var valorTransacao = inputTransacao.value;
var valorValor = inputValor.value;
var valorData = inputData.value; */

// Coletar o elemento botão
var botao = document.querySelector('.transacao__button')
botao.addEventListener('click',function(evento){
evento.preventDefault();

// Inputs (Elementos do DOM)
inputTransacao = document.querySelector('#transacaoInputName');
inputValor = document.querySelector('#transacaoInputMoney');
inputData = document.querySelector('#transacaoInputDate');

// valores dos inputs
var valorTransacao = inputTransacao.value;
var valorValor = inputValor.value;
var valorData = inputData.value;


var linha = document.createElement('tr');

var colunaTransacao = document.createElement('td');
colunaTransacao.textContent = valorTransacao
linha.appendChild(colunaTransacao)

var colunaValor = document.createElement('td');
colunaValor.textContent = valorValor
linha.appendChild(colunaValor)

var colunaData = document.createElement('td');
colunaData.textContent = valorData
linha.appendChild(colunaData)

var tabela = document.querySelector('.extrato__body')
tabela.appendChild(linha)


/* inputTransacao.value = ""
inputValor.value = "" */

var corpo = document.querySelector('body')
if (valorValor>0 && valorValor<=10){
corpo.style.backgroundColor = 'green';
}else if(valorValor>10 && valorValor<=50){
    corpo.style.backgroundColor = 'orange';
}else if(valorValor>50) {
    corpo.style.backgroundColor = 'red';
    alert('Miga sua loka')
}
inputData.value = "" 

document.querySelector('.transacao__form').reset();

})


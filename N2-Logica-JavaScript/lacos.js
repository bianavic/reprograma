// Adivinha o numero


//  gera numero aleatorio entre 0 e 10
var numeroOculto = Math.round(Math.random()*10)
var acertou = false;
var chute 

console.log(numeroOculto);

while(acertou == false) {
    chute = parseInt(prompt('Tente adivinhar o número'))
    
    if (chute == numeroOculto) {
    acertou = true
        alert('Parabéns, voce acertou!')
    }
}

// algoritmo que conta de 0 até 10

var numero = 0

while(numero<=10) {
    console.log(numero)
    numero++ 
} // numero + 1

//  contar de 10 a 0
var numero = 10
while(numero>=0) {
    console.log(numero)
    numero-- // numero - 1
}
numero--
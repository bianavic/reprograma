const cartas = document.querySelectorAll('.carta')

function embaralhar() {
    cartas.forEach(carta => {
        let numeroAleatorio = Math.floor(Math.random() * 12);
        carta.style.order = numeroAleatorio
    });
}

embaralhar();

//para cada carta adiciono o evento escutador. qdo clicar na carta o evento será o click e a carta vira
cartas.forEach(carta => { carta.addEventListener('click', virarCarta) })

//criar variavel para cada carta
let primeiraCarta, segundaCarta

/* 
outra opção
let primeiraCarta = null
let segundaCarta = null
e dentro do if (primeiraCarta = null)
 */

//definir funcao virar carta
function virarCarta() {
    if (primeiraCarta && segundaCarta){
        return
    } else{

    
    // adiciono this para que aquela carta seja adicionada
    this.classList.add('flip')
    }
    //depois de criar as variaveis primeiraCarta e segundaCarta trabalho com o if
    if (!primeiraCarta) {
        primeiraCarta = this //o this referencia a carta que virei
        console.log('1Carta', primeiraCarta)
    } else {
        if (this === primeiraCarta) {
            return
        } else {

    //porque basta saber se a segunda carta é null, naop preciso continuar com a funcao, deixa ela vazia e dá retunr para nao retornar nada 
    if (segundaCarta != null) {
            return
        } else {
            segundaCarta = this
            console.log('2Carta', segundaCarta)}
            if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework) {
            primeiraCarta = null
            segundaCarta = null
            return
        }else{
            setTimeout(() =>  {
                    primeiraCarta.classList.remove('flip');
                    segundaCarta.classList.remove('flip');
                    primeiraCarta = null;
                    segundaCarta = null;
            },1500)
            }
            }
        }
        }

(cartas.every((carta)=> { return carta.classList.contain('flip')}
))

// adicionei a class flip
//cartas [0].classList.add('flip')

// const cartas = document.querySelectorAll('.carta')

// function embaralhar(){
//     cartas.forEach(carta => {
//         let numeroAleatorio = Math.floor(Math.random()*12);
//         carta.style.order = numeroAleatorio
//     })
// }
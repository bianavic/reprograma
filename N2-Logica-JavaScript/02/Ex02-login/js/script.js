var mensagem = document.querySelector('.login__subtitle');
console.log(mensagem)


var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    console.log(mensagem)
    var email = document.querySelector('#loginInputEmail')
    var senha = document.getElementById('loginInputPassword')
    if (email.value == "" || email.value.length == 0 ) {
         mensagem.textContent = 'Digite um email valido'    
        return 
    }else if (email.value.indexOf('@') <=0  || email.value.indexOf('@')>=email.value.length-1) {
        mensagem.textContent = 'O email informado é inválido'
        return
    }else if (senha.value =='' || senha.value.length < 6 ) {
        mensagem.textContent = 'A senha informada é inválida!'
        return
    }
        mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso!'
})
var mensagem = document.querySelector('.mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
    //    mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
    if (email.value == "" || email.value.length == 0 ) {
        
        mensagem.textContent = 'Digite um email valido'
        return 
    }else if (email.value.indexOf('@')==-1) {
        mensagem.textContent = 'O email informado é inválido'
    return
    }

       mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
       
       console.log(email.value.indexOf('@'))

    
})


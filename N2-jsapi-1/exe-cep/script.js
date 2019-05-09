//pegando o valor do input cep
let cep = document.getElementById('cep');

//O fetch esta dentro do evento escutador pq ele só vai fazer a requisição (disparo a API) quando o usuario tirar o foco do CEP
cep.addEventListener('focusout',()=>{
    fetch('https://viacep.com.br/ws/' + cep.value + '/json/')
    .then(response => response.json())
    .then(data => ){
        console.log('SUCESSO')
        console.log(data)
        // codando aqui dentro
        // da para acessar sem ter que criar uma variavel, ja que nao usamos em outro lugar
       let bairro = document.getElementById('bairro').value = data.bairro;
       let estado = document.getElementById('estado').value = data.uf;
       let cidade = document.getElementById('cidade').value = data.localidade;
       let endereco = document.getElementById('endereco').value = data.logradouro;
       
    })
    .catch(function(erro){
        console.log(erro)
    })
    
})

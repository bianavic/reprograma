const button = document.getElementById('send_form');

// o botao que é do form executa um evento que é do form
button.addEventListener('click', (evento) => {
    // previne um evento padrao, previne que envie automaticamente (preventDefault)
    evento.preventDefault();


    // value é propriedade deste elemento - document.getElementById('first_name').value;
    const nome = document.getElementById('first_name').value;
    const sobrenome = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // temos que passar de objeto para string
            'first_name': nome,
            'last_name': sobrenome,
            'email': email,
        })

    })
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            //utilizando o innerHtml
            //console.log(data);
            //document.getElementById('message').innerHTML = 'Sucesso!'

            // utilizando textContent
            console.log(data);
            document.getElementById('message').textContent = 'Sucesso!! :'


        })
        .catch((erro) => {
            console.log(erro);
        })

})
/* const app = document.getElementById('root');
const authors = document.querySelector('.class');
authors.setAttribute('');
app.appendChild(authors); */

fetch('https://reqres.in/api/users')

        .then((response) => {
            return response.json();
        })
        .then(function(data) {
            //console.log(data)

       data.data.results.forEach(colaborador => {
        const id = document.createElement('*');
        id.setAttribute('data.id');


       })

       
        const name = document.createElement('h2');
        name.textContent = colaborador.name.first + " " + colaborador.name.last;
        card.appendChild(name);

        const email = document.createElement('p');
        email.textContent = colaborador.email;
        card.appendChild(email);

        const button = document.createElement('button data-id');
        button.textContent = colaborador.button;
        card.appendChild(button);

        })
    
        .catch((erro) => {
            console.log(erro);
        })
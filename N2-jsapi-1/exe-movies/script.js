const movies = document.querySelector('.movies');
const box = document.createElement('span');
const button = document.querySelector('.btn-search-movie');

button.addEventListener('click', () => {   
    event.preventDefault();
    console.log('OK')
    movies.innerHTML = ''

fetch(`https://www.omdbapi.com/?s=${movie.value}&apikey=b5ce1f57`)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.Search);
    data.Search.forEach(movie => {
        const box = document.createElement('class')
        box.setAttribute('class', 'box');
        box.setAttribute('data-id', movie.imdbID);
        movies.appendChild(box)

        const poster = document.createElement('img');
        poster.setAttribute('src', movie.Poster);
        box.appendChild(poster); 

        const title = document.createElement('h1');
        title.textContent = movie.Title;
        movies.appendChild(title);

        const type = document.createElement('p');
        type.textContent = 'Type ' + movie.Type;
        movies.appendChild(type);

        let year = document.createElement('p')
        year.textContent = 'Release date: ' +movie.Year;
        movies.appendChild(year)   

    });
})
.catch((erro) => {
    console.log('ERRO')
})
//codigo para limpar a barra de pesquisa assim que a pesquisa for feita, tem que estar depois de tudo pq ele vai ser executado depois que a busca for feita
document.querySelector('.form').reset('');
})

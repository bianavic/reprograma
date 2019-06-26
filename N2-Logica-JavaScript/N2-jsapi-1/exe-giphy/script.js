const stickers = document.querySelector('.stickers');
let button = document.querySelector('.btn-search-sticker')

button.addEventListener('click', () => {
    console.log(sticker.value);
    event.preventDefault();
    console.log('SUCESSO')
    // o que significa o codigo abaixo?
    stickers.innerHTML = ''

fetch(`https://api.giphy.com/v1/stickers/search?q=${sticker.value}&api_key=qBuqu1LYTm4WS0OeR0WtSEC2FEKM87sZ`)
.then((response) => {
    return response.json();
})
.then((data) => {
        console.log(data.data);
        
        data.data.forEach(image => {
            const card = document.createElement('div');
            card.setAttribute('class', 'box');
            card.setAttribute('data-id', 'image.id');
            stickers.appendChild(card)

            let gif = document.createElement('img');
            gif.src = image.images.original.url;
            card.appendChild(gif);
        });
})
.catch(function(error){
    console.log('ERRORR')
})
//codigo para limpar a barra de pesquisa assim que a pesquisa for feita, tem que estar depois de tudo pq ele vai ser executado depois que a busca for feita
document.querySelector('.form').reset('');
})
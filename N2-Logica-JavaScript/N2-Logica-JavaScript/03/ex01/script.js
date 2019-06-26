//console.log(listaProdutos)

// se chamar uma variavel com nome x, modificar o nome da funcao x
// exemplo, const produtos. Coloque as funcoes no singular, produto 
const produtos = document.querySelector('.produtos')
listaProdutos.forEach((produto, indice) => {

    let card = document.createElement('div');
    card.className = 'card'
    // poderia usar appendChild
    // metodo split transforma tudo em array
    card.innerHTML =
        `<h3>Produto: ${produto.descricao.split(' ')[0]}</h3>
    <p>Descrição: ${produto.descricao}</p>
    <p>Valor: ${produto.preco}</p>
    <a href=# id= '${indice}'>"Adicionar ao carrinho"</a>`
    // pegar card e inserir na lista de produtos
    produtos.appendChild(card);
});

let botoes = document.querySelectorAll('a');
botoes.forEach((botao, indices) => {
    botao.addEventListener('click', function () {
        console.log(botao.id)
    // posso substituir console.log(botao, indice)
    });
}
let array = [1, 2, 3, 4, 5]
let novoarray = array.map(element=> elemneto*2)


let lista=['item1', 'item2', 'item3']
let listHtml = document.createElement('ul')
listHtml.innerHtml = lista.map((elemento)=>{return `<li>${elemento}<li>`}).join(' ')
listHtml
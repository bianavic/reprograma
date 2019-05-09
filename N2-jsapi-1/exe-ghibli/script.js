const obj = [
      {
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
      },
      {
        "title": "Grave of the Fireflies",
        "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
      },
      {
        "title": "My Neighbor Totoro",
        "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her."
      },
      {
        "title": "Kiki's Delivery Service",
        "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
      },
      {
        "title": "Only Yesterday",
        "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self."
     }
    ]

    // INICIO exercicio segunda feira

    // criamos a 'constante app' que pegamos pelo 'id' da 'div root' no html.
    const app = document.getElementById('root');
    // criamos a 'const container' onde dentro do html criamos o 'elemento div'.
    const container = document.createElement('div');

    // OBS: container sempre antes app. 
    // dentro da nossa 'constante container', (a nossa 'div' criada anteriormente), adicionamos uma 'classe' de nome 'container'
    // 'setAttribute' recebe 2 'parametros', o primeiro é o 'atributo' (class, src etc) e o segundo é o 'valor'.
    container.setAttribute('class','container');

    // dentro da nossa 'div root' adicionamos a 'nova div' criada, a 'container'
    app.appendChild(container);
    // container.classList.add('container') utilizamos 'classList' para mais de um valor


    // exercicio chamar 'titulos e descricao'.
    
    /* COMECO metodo com for e 'i'.
    console.log(obj.length)
    for (let i = 0; i < obj.length; i++ ) {
    console.log(obj[i].title)
    console.log(obj[i].description)
    FIM metodo com for e 'i'.*/

    
    // OUTRO METODO 
    // comeca 'loop' utilizando metodo 'forEach'. 'forEach' recebe 'função' de 'callback' com um ou mais 'parametros'.
    // neste exemplo estou passando um 'parametro', o 'filme', utilizando uma 'arrow function'.
    // 'filme' é nosso 'i' (aquele utilizado para fazer o 'for'). É ele que interagirá com cada item da minha 'array'.
    obj.forEach((filme) => {
    
    // usando 'template string' peço para mostrar no 'console' cada 'titulo e descricao' da minha 'array' de 'objetos' (obj).
    console.log(`${filme} ${filme.description}`);
    // FIM DO OUTRO METODO
  
    // criamos a 'variavel Let', ela cria um novo elemento, uma 'div'.
    let card = document.createElement('div');
    
    // dentro do 'card' adicionamos uma classe de nome 'card'
    // obs: o nome da 'classe' é aleatório, não precisa ter o mesmo nome da 'variável', só é preciso fazer sentido com o código em si.
    card.setAttribute('class', 'card');
   
    // adicionamos nossa 'variavel card' (aquela 'div' criada com 'createElement' ) dentro daquele 'container' criado la em cima.
    // quero adicionar um card no container
    container.appendChild(card);

    // 'elemento' do 'titulo' (h1)
    // mesmo processo acima, só que utilizado o 'h1' para criarmos o'titulo' da 'card'.
    let title = document.createElement('h1');

    // para cada h1 criado, aplicamos a propriedade innerHtml. É uma propriedade que pega o conteúdo dentro do html
    // para dentro do html atribuimos o valor title. 
    // lembrando que 'filme' é meu 'parametro' daquele 'forEach' que interage com cada 'titulo' da minha array 'obj'.
    title.innerHTML = obj[i].title;
    
    // depois dos processos acima, adicionamos a 'variavel' 'titulo' no 'card'.
    // lembrando que o js executa os processos por ordem do que fazemos, logo, o que ele está adicionando na 'card' é o nosso 'h1', depois de receber o 'valor' de 'filme.title'.
    // quero adicionar um titulo no meu card
    card.appendChild(title);

    // o mesmo processo para criarmos a 'descrição' dos 'cards'.
    let description = document.createElement('p');
    description.innerHTML = obj[i].description;
    // quero adicionar uma descricao no meu card
    card.appendChild(description);

    });

     // FIM exercicio segunda feira
// filter
var alunas = [
    { nome: 'Carla', idade: 15 },
    { nome: 'Mariel', idade: 18 },
    { nome: 'Fernanda', idade: 20 }
];
/* var alunasMaiores = [];
for (var i = 0; i < alunas.length; i++) {
    if (alunas[i].idade >= 18) {
        alunasMaiores.push(alunas[i]);
    }
}
console.log(alunasMaiores);

 */

 function maiorDe (pessoa) {
    return pessoa.idade >= 18;
 }

 console.log(alunas.filter(maiorDe))
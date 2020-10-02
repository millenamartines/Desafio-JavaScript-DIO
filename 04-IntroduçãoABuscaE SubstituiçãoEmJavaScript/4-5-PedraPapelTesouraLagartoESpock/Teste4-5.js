/*formato do dicionario de regras
    objeto['nome do item'] = lista_de_items_que_perdem pro 'nome_do_item'
*/
let dicionarioDeRegras = {
    tesoura: ['papel','lagarto'],
    papel: ['pedra','spock'],
    pedra: ['lagarto','tesoura'],
    lagarto: ['spock','papel'],
    spock: ['tesoura','pedra']
};

// formato: player1 vs player2
let player1 = 'fernanda';
let player2 = 'marcia';

let resultado;

let N = parseInt(gets());
for(var i=0;i<N;i++){

let escolhas = gets().split(' ');
if(escolhas[0] === escolhas[1])
resultado = 'empate';
else
resultado = (dicionarioDeRegras[escolhas[0]].includes(escolhas[1])) ? player1 : player2;

console.log(resultado);
}
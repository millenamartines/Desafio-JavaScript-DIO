//Ordenando fila de banco por SMS do maior pelo menor
let cases = parseInt(gets()); //Recebe quantidade de casos

for (let i = 1; i <= cases; i++) {

    let stillInPosition = 0; //Conta os não alterados
    let numCustomers = parseInt(gets());
    let arriving = (gets()).split(" ").map((arriving) => arriving); //Recebe os clientes
    //let arr1 = arriving.map((arriving) => arriving);
    let stack = arriving.map((arriving) => arriving).sort(sortNum);

    //Ordenando em ordem descrescente e númerica
    function sortNum(a, b){
        return (b - a) //Função auxiliar para o array poder serja ordenado numericamente.
    }

    //Comparando valores para pegar os não alterados
    for (let j = 0; j < numCustomers; j++) {
        if ( arriving[j] === stack[j]) {
            stillInPosition++;
        };
    };
    //Saída dos não alterados
    console.log(stillInPosition);
};
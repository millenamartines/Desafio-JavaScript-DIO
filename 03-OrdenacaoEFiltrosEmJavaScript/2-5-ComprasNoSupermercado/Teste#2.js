let cases = parseInt(gets()); //Recebe quantidade de casos

for (let j = 0; j < cases; j++) {
    let newProducts = (gets()).split(" ");//Recebe os produtos
    let list = new Set(newProducts); //Remove repetidos 1a parte
    let listOrdered = [...list].sort().toString().replace(/,/g, ' '); //2a parte, ordena.
    console.log(listOrdered);
};
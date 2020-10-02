let cases = parseInt(gets()); // Receiving amount cases
let arrivingSeparated = []; 

for (let i = 0; i < cases; i++) {
    arrivingSeparated[i] = gets() // Receiving cases
            .split(' ') // Separating words
            .sort((a, b) => (b.length > a.length) ? 1 : // Order by length
                (b.length === a.length)  ? (a > b) -1 : -1) // Order by ASC
            .toString()
            .replace(/,/gi, " ")
}
for (sentence in arrivingSeparated) console.log(arrivingSeparated[sentence]);
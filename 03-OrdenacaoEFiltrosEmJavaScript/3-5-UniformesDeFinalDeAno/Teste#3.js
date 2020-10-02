let cases = gets(); //Recebe quantidade de casos
let students = [];

for (let i = 0; i < cases; i++){
    let name = gets();
    let uniform = gets();
    let colorSize = uniform.split(" ");
    let color = colorSize[0];
    let size = colorSize[1];

    students.push({ name, color, size });
}

students.sort((a,b) => (a.color > b.color) ? 1 :
                       (a.color === b.color) ? (a.size < b.size) ? 1 :
                       (a.color === b.color) && (a.size === b.size) ?
                       (a.name > b.name) ? 1 : -1 : -1 : -1);

students.map(student => console.log(student.color, student.size, student.name));
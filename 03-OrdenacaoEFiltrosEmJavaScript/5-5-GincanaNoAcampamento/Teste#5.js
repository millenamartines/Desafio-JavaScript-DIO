let stopped = 0;

while (stopped !== 1 ) {
  
    let cases = parseInt(gets()); 
    
    if (cases === 0) {
        stopped = 1;
     } else {
  
        let students = [];

        for (let i = 0; i < cases; i++){
            let arriving = gets();
            let nameNumber = arriving.split(" ");
            let name = nameNumber[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            
            if (name.length > 30) name = name.substring(0,30);
            
            let number = parseInt(nameNumber[1]);
            students.push({ name, number });   
        }
        
        let circleNumber = students[0].number;
        students.reverse();

        let target = 0;
        let rounds = 0;
    
        while (students.length !== 1)  {
        
            let newCircle = [];
            
            if (circleNumber % 2 === 0) {
                
                for (let i = 0 ; i < circleNumber; i++) {
                    
                    if (rounds === 0) target = 0;
                    if (target >= students.length) target = 0;
                    newCircle[i] = students[target];
                    rounds++;
        
                    if (i === circleNumber - 1 
                        && newCircle[newCircle.length - 1].number % 2 === 0) {
                            target;
                        } else if (i === circleNumber - 1 
                            && newCircle[newCircle.length - 1].number % 2 !== 0) {
                                target--;
                            } else {
                                target++;
                            }
                    }
                } else {
                
                for (let i = 0 ; i < circleNumber; i++) {
                    
                    if (rounds === 0) target = students.length - 2;
                    if (target < 0) target = students.length - 1;
                    newCircle[i] = students[target];
                    rounds++;
                    
                    if (i === circleNumber - 1 
                        && newCircle[newCircle.length - 1].number % 2 === 0) {
                            
                        } else {
                                target--;
                            }
                }
            }
        
            circleNumber = newCircle[newCircle.length - 1].number;
            
            let index = students.indexOf(newCircle[newCircle.length - 1]);
            students.splice(index,1);
                    
        }
        
        console.log(`Vencedor(a): ${students[students.length - 1].name}`);
        
        }

}
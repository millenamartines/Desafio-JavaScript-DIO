let entrada=[]

for (i= 1 ; i < 60 ; i++){
  entrada.push(gets())
  if (entrada[i-1] === undefined){
    i =60
    entrada.pop()
  }
}
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

found =false;
for( j = 0; j < entrada.length;j++){
    for(i=0 ; i < entrada[j].length;i++ ){

      if (entrada[j][i] === '_'){
        if (!found) {
          entrada[j] = replaceAt(entrada[j], i, "<i>")
          found = true
        }
        else{
          entrada[j] = replaceAt(entrada[j], i, "</i>")
          found= false;
        }
      }
  }
}
for( j = 0; j < entrada.length;j++){
    for(i=0 ; i < entrada[j].length;i++ ){

      if (entrada[j][i] === '*'){
        if (!found) {
          entrada[j] = replaceAt(entrada[j], i, "<b>")
          found = true
        }
        else{
          entrada[j] = replaceAt(entrada[j], i, "</b>")
          found= false;
        }
      }
  }
}



for( palavra in entrada){
 console.log( entrada[palavra])
}
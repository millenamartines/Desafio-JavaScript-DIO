let stopped = 0;

do {      
      let password = gets(), // Receiving password
      upperCaseTest = password.toLocaleLowerCase(),
      lowerCaseTest = password.toLocaleUpperCase(), 
      numberTest = password.match(/(\d)/i),
      specialCharTest = password.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
      lenghtTest = password.length >= 6 && password.length <= 32;
  
      // Validating
  if  (password.length === 0) {
    
    } else {
      if (password !== upperCaseTest &&
          password !== lowerCaseTest && 
          password === specialCharTest &&  
          numberTest && lenghtTest) {
            console.log('Senha valida.'); 
      } else { 
            console.log('Senha invalida.');
      }
  }
  	if (password.length === 0 ) stopped = 1;
    
} while (stopped !== 1) 
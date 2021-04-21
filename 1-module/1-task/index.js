function factorial(n) {

  let result = 1;
  
  for (let i=1; i<=n; i++){

    if (n==1 || n==0){
      break;
    }

    result *=i;    

  }

  alert (result);  

}

factorial(0); 
factorial(1); 
factorial(3); 
factorial(5);

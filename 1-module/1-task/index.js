function factorial(n) {
  let result = 1;

  if (n==1 || n==0){
    return result;
  }
  else {   
    for (let i=1; i<=n; i++){
      result *=i;  
    }
  }
  return result;  
}

factorial(0); 
factorial(1); 
factorial(3); 
factorial(5);

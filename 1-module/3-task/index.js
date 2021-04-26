function ucFirst(str) {  
    if (!str){
      return '';
    }    
    let firstLetter = str[0].toUpperCase(), otherWord = str.slice(1);
    return (firstLetter + otherWord);    
}





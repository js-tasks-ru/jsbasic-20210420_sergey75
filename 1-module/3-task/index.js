function ucFirst(str) {  
    if (!str){
      return ('');
    }    
    let firstLetter = str[0].toUpperCase();
    let otherWord = str.slice(1);
    return (firstLetter + otherWord);    
}

let str = prompt('Введите слово или букву');  
ucFirst(str);




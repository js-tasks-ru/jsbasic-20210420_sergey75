function camelize(str) {
  let arr = str.split('-');

  arr = arr.map (function(word, index){
    if (index > 0){
      return word = word[0].toUpperCase() + word.slice(1);               
    }
    return word;           
  })

  arr = arr.join('');

  return arr;
}

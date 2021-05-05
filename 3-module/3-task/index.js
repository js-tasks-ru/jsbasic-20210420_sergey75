function camelize(str) {
  let changedArray = str  
    .split('-')
    .map((str, index) => {
      if (index > 0) {
        return str = str[0].toUpperCase() + str.slice(1);               
        }
        return str;
    })
    .join('');
    return changedArray;
}

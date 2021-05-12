function getMinMax(str) {
  let result = {};
  let arr = str
    .split(',')
    .join('')
    .split(' ')
    .filter((value) => Number(value))  
    result.min = Math.min(...arr);      
    result.max = Math.max(...arr);         
  return result;
}

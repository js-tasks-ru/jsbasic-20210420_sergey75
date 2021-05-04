function filterRange(arr, a, b) {
  let filtredArr = [];

  arr.forEach((value) => {
    if(value >= a && value <= b){
      filtredArr.push(value);
    }
  })
  return filtredArr;
}

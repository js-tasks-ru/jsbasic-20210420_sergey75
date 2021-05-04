function namify(users) {
  let arr = [];

  for (const key in users){
    arr.push(users[key].name);
  }
  return arr;
}

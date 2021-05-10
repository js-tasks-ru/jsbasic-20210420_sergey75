function makeFriendsList(friends) {
  let ul = document.createElement('ul');  

  let liArray = friends
    .map((friends) => {
      return `<li>${friends.firstName}` + ` ${friends.lastName}</li>`;
    })
    .join('');

  ul.innerHTML = liArray;

  return ul;

}

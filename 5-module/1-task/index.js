function hideSelf() {
  let button = document.body.querySelector('.hide-self-button');
  button.addEventListener('click', function(){
    this.hidden = true;
  });
}

function toggleText() {
  let button = document.body.querySelector('.toggle-text-button');  
  let text = document.body.querySelector('#text');

  button.addEventListener('click', () => {
    text.toggleAttribute('hidden'); 
  });

  
}

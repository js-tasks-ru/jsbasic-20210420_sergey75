/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let elem = document.querySelector('tbody'); 

    for (let i = 0; i < rows.length; i++){    
      elem.insertAdjacentHTML('beforeend', `<tr><td>${rows[i].name}</td><td>${rows[i].age}</td><td>${rows[i].salary}</td><td>${rows[i].city}</td><td><button>X</button></td></tr>`);          
    }
    let button = elem.querySelectorAll('button');  
    
    button.forEach((value) => {
      value.addEventListener('click', () => {
          value.parentNode.parentNode.remove();
        })
    })

  }
}

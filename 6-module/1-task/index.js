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
      this.name = rows[i].name;
      this.age = rows[i].age;
      this.salary = rows[i].salary;
      this.city = rows[i].city;      
      elem.insertAdjacentHTML('beforeend',
         `<tr><td>${this.name}</td>
         <td>${this.age}</td>
         <td>${this.salary}</td>
         <td>${this.city}</td>
         <td><button>X</button></td></tr>`);          
    }

    let button = elem.querySelectorAll('button');  

    button.forEach((value) => {
      value.addEventListener('click', () => {
          value.parentNode.parentNode.remove();
        })
    })

  }
}

function highlight(table) {

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let dataValue = row.cells[3].dataset.available;
    let gender = row.cells[2].textContent;
    let age = Number(row.cells[1].textContent);  
    
    if(gender === 'm'){
      row.classList.add('male');  
    }
    else row.classList.add('female');

    if(age < 18) {
      row.setAttribute('style', 'text-decoration: line-through');  
    }

    switch (dataValue) {
      case "true":        
        row.classList.add('available');
        break;
      
      case "false":
        row.classList.add('unavailable');
        break; 
          
      default:  
        row.setAttribute('hidden', '');
        break; 
    }

  }
  
}




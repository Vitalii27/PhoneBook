
class PhoneBook {
  constructor() {
    this.users = [
      { Name: 'Иван', LastName: 'Иванов', Email: 'ivanov@mail.ru' },
      { Name: 'Сергей', LastName: 'Сергеев', Email: 'serg@mail.ru' },
      { Name: 'Александр', LastName: 'Александров', Email: 'alex@mail.ru' },
      { Name: 'Мария', LastName: 'Иванова', Email: 'mary@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' },
      { Name: 'Лена', LastName: 'Иванова', Email: 'len@mail.ru' }
    ];
    this.headerName = ['Name', 'Last Name', 'Email'];

  }


  createHead() {
    return `<header class = 'header'>
                    <div class="container top-radius">
                        <h2>Contacts</h2>
                    </div>
                </header>`
  }

  createMain() {
    let main = `<main>
	                	<div class="container">
		              	  <form class="form-inline search-form">
			                	<div class="form-group">
				                	<label class="sr-only" for="search">Search</label>
				                	<input type="text" class="form-control" id= "search" placeholder="Search">
			                	</div>
			               </form>`;
    main += this.createTheader();
    return main += `</div></main>`
  }

  createTbody() {
    let tbody = ` `
    this.users.forEach(el => {
      let user = el;
      tbody += `<tr>`;
      for (let key in user) {
        tbody += `<td>${user[key]}</td>`;
      }
      tbody += `</tr>`;
    })
    return tbody;
  }

  createTheader() {
    let table = `<table class = "table table-hover contacts"><thead>`;
    this.headerName.forEach(elem => {
      table += `<th>${elem}</th>`;
    });
    table += `</thead>`;
    table += this.createTbody();
    table += `</tbody></table>`;
    return table;
  }

  



  render() {

    let body = document.querySelector('body');
    body.innerHTML += this.createHead() + this.createMain();

  }
  
}

let myBook = new PhoneBook();
myBook.render();
// myBook.sorting()

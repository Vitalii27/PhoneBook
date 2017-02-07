class Keypad {
  constructor() {

  }
  createHead() {
    return `<header class="header">
	            	<div class="container top-radius">
			             <h2>Keypad</h2>
	            	</div>
          	</header>`
  }


  createMain() {

    return `<main class = "main keypad">
              <div class="container">
                <div class="number">
                  <span  class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <span id = "num" class ="numbers"></span>
                  <span id = "delNum" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
                </div>
                <div class="keypad-holder">
                  <button class="key">1</button>
                  <button class="key">2</button>
                  <button class="key">3</button>
                  <button class="key">4</button>
                  <button class="key">5</button>
                  <button class="key">6</button>
                  <button class="key">7</button>
                  <button class="key">8</button>
                  <button class="key">9</button>
                  <button class="key">*</button>
                  <button class="key">0</button>
                  <button class="key">#</button>
                  <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
                </div>
              </div>
            </main>`
  }

  addButton() {
    document.body.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        document.querySelector('span.numbers').textContent += e.target.textContent;

      }
    })
  }
  deleteButton() {
    document.body.addEventListener('click', (e) => {
      if (e.target.className === 'glyphicon glyphicon-circle-arrow-left') {
        let del = document.querySelector('span.numbers').textContent;
        del = del.slice(0, -1);
        document.querySelector('span.numbers').textContent = del;
      }

    })
  }

  render() {

    let body = document.querySelector('body');
    body.innerHTML += this.createHead() + this.createMain();
    this.addButton()
    this.deleteButton()
  }

}


let keypad = new Keypad();
keypad.render();


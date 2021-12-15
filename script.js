window.onload = function () {
  function paletaDeCores() {
    let paleta = document.querySelector('#color-palette');
    let cores = ['black', 'red', 'blue', 'green', 'yellow'];

    for (let posicao in cores) {
      let criaCor = document.createElement('li');
      criaCor.classList.add('color');
      criaCor.style.backgroundColor = cores[posicao];

      paleta.appendChild(criaCor);
    }
  }

  paletaDeCores();
};

window.onload = function () {
  function paletaDeCores() {
    let paleta = document.querySelector('#color-palette');
    let cores = ['black', 'red', 'green', 'yellow'];

    for (let posicao in cores) {
      let criaCor = document.createElement('li');
      criaCor.classList.add('color');
      criaCor.style.backgroundColor = cores[posicao];
      if (cores[posicao] === 'black') {
        criaCor.classList.add('selected');
      }

      paleta.appendChild(criaCor);
    }
  }

  paletaDeCores();

  //! Function que implementa a paleta de cores e suas cores

  function painel() {
    let painel = document.querySelector('#pixel-board');
    for (let index = 1; index <= 5; index += 1) {
      let criaColuna = document.createElement('ol');
      for (let indi = 1; indi <= 5; indi += 1) {
        let criaLinha = document.createElement('li');
        criaLinha.classList.add('pixel');
        criaLinha.style.backgroundColor = 'white';

        criaColuna.appendChild(criaLinha);
      }

      painel.appendChild(criaColuna);
    }
  }

  painel();

  //!  Function que implementa o painel para desenhar

  let corSelecionada = document.querySelector('#color-palette');

  corSelecionada.addEventListener('click', function (elemento) {
    let classe = document.querySelector('.selected');
    let clas = elemento.target.classList;
    if (clas.length < 2) {
      classe.classList.remove('selected');
      clas.add('selected');
    }
  });

  //! Function que adiciona a classe selected na cor clicada e remove da cor anterior

  let possicaoSelecionada = document.querySelector('#pixel-board');

  possicaoSelecionada.addEventListener('click', function (elemento) {
    let classe = document.querySelector('.selected').style.backgroundColor;
    let possicao = elemento.target;
    if (possicao.classList == 'pixel') {
      possicao.style.backgroundColor = classe;
    }
  });

  //! Function que pinta o painel com a cor selecionada
};

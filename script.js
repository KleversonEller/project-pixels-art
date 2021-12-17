window.onload = function () {
  //? Requisito 2 - 3 - 6

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

  //? Requisito 4 - 5

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

  //? Requisito 7

  let corSelecionada = document.querySelector('#color-palette');

  corSelecionada.addEventListener('click', function (elemento) {
    let classe = document.querySelector('.selected');
    let clas = elemento.target.classList;
    if (clas.length < 2 && clas == 'color') {
      classe.classList.remove('selected');
      clas.add('selected');
    }
  });

  //! Function que adiciona a classe selected na cor clicada e remove da cor anterior

  //? Requisito 8

  let possicaoSelecionada = document.querySelector('#pixel-board');

  possicaoSelecionada.addEventListener('click', function (elemento) {
    let classe = document.querySelector('.selected').style.backgroundColor;
    let possicao = elemento.target;
    if (possicao.classList == 'pixel') {
      possicao.style.backgroundColor = classe;
    }
  });

  //! Function que pinta o painel com a cor selecionada

  //? Requisito 9

  let botaoLimpar = document.querySelector('#clear-board');

  botaoLimpar.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');

    for (let posicao of pixels) posicao.style.backgroundColor = 'white';
  });

  //! Function que ao clicar no botao 'limpar' pinta todo o quadro de branco
};

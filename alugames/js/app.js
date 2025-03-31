let quantidadeAlugada = 1;

function alterarStatus(gameId){
    let game = document.getElementById(`game-${gameId}`);
    let imagemJogo = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nomeJogo = game.querySelector('.dashboard__item__name').textContent;

    if (imagemJogo.classList.contains('dashboard__item__img--rented')){
    let confirm = window.confirm(`Você tem certeza que deseja devolver ${nomeJogo}?`);
        if (confirm) {
          imagemJogo.classList.remove('dashboard__item__img--rented');
          botao.classList.remove('dashboard__item__button--return');
          botao.textContent = "Alugar";
          quantidadeAlugada--;
        }   
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
        quantidadeAlugada++;
    }
    console.log(`Há ${quantidadeAlugada} jogos alugados`);
} 
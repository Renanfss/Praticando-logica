function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);


    if (quantidade > (ate - de) + 1) {
        window.alert(`Não é possivel sortear ${quantidade} numeros no intervalo de ${de} até ${ate}!`);
        reiniciar(); 
        return;  //evita que o código continue sua execução e trave, pois a função reiniciar apenas limpa os containers, mas os valores inseridos estarão armazenados nas variaveis
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = gerarNaleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = gerarNaleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById(`resultado`);
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao()
}

//Função JS( Math.random()), gera um número aleatorio com minimo e maximo incluso
function gerarNaleatorio (minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function alterarStatusBotao () {
    let botao = document.getElementById(`btn-reiniciar`);
    if (botao.classList.contains(`container__botao-desabilitado`)){
        botao.classList.remove(`container__botao-desabilitado`);
        botao.classList.add(`container__botao`);
    } else {
        botao.classList.remove(`container__botao`);
        botao.classList.add(`container__botao-desabilitado`);
    }
}

    function reiniciar(){
        document.getElementById('quantidade').value = ' ';
        document.getElementById('de').value = ' ';
        document.getElementById('ate').value = ' ';
        document.getElementById(`resultado`).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
        alterarStatusBotao();
    }


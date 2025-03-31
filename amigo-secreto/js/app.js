let nomeAmigos= [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    //validações
    if (nomeAmigo == ''){
        alert('Digite um nome valido!');
        return;
    } if(nomeAmigos.includes(nomeAmigo)){
        alert(`${nomeAmigo} já está adicionado à lista, adicione outro nome ou inclua seu sobrenome.`);
        return;
    }
    
    nomeAmigos.push(nomeAmigo);
    document.getElementById('lista-amigos').textContent = `${nomeAmigos}`;
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    //validações
    if (nomeAmigos.length < 3){
        alert('Não é possivel sortear com menos de 3 amigos.')
        return;
    }

    embaralha(nomeAmigos);
    document.getElementById('lista-sorteio').textContent = ''; //evita que ao realizar 2 sorteios consecutivos eles sejam escritos sem apagar o anterior no campo
    let listaSorteio = document.getElementById('lista-sorteio');

    for ( let i = 0; i < nomeAmigos.length; i++){
        if (i == nomeAmigos.length - 1 ){
            listaSorteio.innerHTML+= nomeAmigos[i] + ' --> ' + nomeAmigos[0] + '<br>'
        } else {
            listaSorteio.innerHTML+= nomeAmigos[i] + ' --> ' + nomeAmigos[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    nomeAmigos = [];
}
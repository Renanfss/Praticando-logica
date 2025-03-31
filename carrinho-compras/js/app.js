let total = 0;
limpar ();

function adicionar () {
    let produto = selecionarProduto();
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let preco = produto.preco * quantidade;

    //adicionar ao carrinho

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto.nome} <span class="texto-azul">R$${preco}</span>
          </section>`;
    document.getElementById('quantidade').value = ' ';
    //calculo valor total
    total += (produto.preco * quantidade);
    document.getElementById('valor-total').textContent = `R$${total}`;

    if(quantidade < 1){
        alert("Não é possivel adicionar menos de 1 itém ao carrinho, selecione um número valido");
        limpar();
    }

}

function selecionarProduto (){ //Seleciona o produto através do formulario e separa suas informações
    let produto = document.getElementById('produto').value;
    //Divide a string no trecho" - R$", resultando em um vetor com o produto e o preço
    let nomeProduto = produto.split(" - R$")[0]; 
    let precoProduto = produto.split(" - R$")[1];

    return{
        nome: nomeProduto, preco: parseInt(precoProduto)
    };
}

function limpar () {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById('valor-total').textContent = `R$${total}`;
}
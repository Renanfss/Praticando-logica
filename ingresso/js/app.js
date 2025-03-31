function comprar(){
    let quantidade = document.getElementById('qtd');
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    
    calculo(tipoIngresso, quantidade.value); //calcula a quantidade restante dos ingressos
    document.getElementById('qtd').value = ' ';
}

function calculo (tipoIngresso, quantidade) {
    let numeroDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent); //acessa o conteúdo em texto dos números de ingressos e faz uma conversão para o tipo inteiro

    if (quantidade < 1){
        alert('Não é possivel comprar menos que 1 ingresso')
    } else{
        if (quantidade > numeroDisponivel){  //verifica caso o usuário queira comprar mais que a quantidade disponivel
            alert(`Não é possivel comprar ${quantidade} ingressos nessa opção. Há ${numeroDisponivel} ingressos disponiveis, selecione outra opção.`)
        } else {
            quantidadeRestante = numeroDisponivel - quantidade;
            document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeRestante;
        }
    }
}
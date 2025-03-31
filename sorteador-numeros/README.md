# Sorteio de Números Aleatórios

Este projeto implementa um sistema de sorteio de números aleatórios dentro de um intervalo definido pelo usuário, garantindo que não haja repetições e que a quantidade solicitada seja válida.

## Como funciona

### Função `sortear()`
- Obtém a quantidade de números a serem sorteados e os limites do intervalo.
- Verifica se é possível sortear a quantidade desejada dentro do intervalo especificado.
- Gera números aleatórios sem repetição e os exibe na tela.
- Ativa o botão de reiniciar após o sorteio.

### Função `gerarNaleatorio(minimo, maximo)`
- Utiliza `Math.random()` para gerar um número aleatório dentro do intervalo informado.
- Garante que o número gerado esteja dentro dos limites estabelecidos.

### Função `alterarStatusBotao()`
- Habilita ou desabilita o botão de reinício conforme a necessidade.

### Função `reiniciar()`
- Reseta os campos de entrada e a exibição dos números sorteados.
- Restaura o estado inicial do botão de reinício.

## Tecnologias utilizadas
- **JavaScript** para manipulação do DOM e geração de números aleatórios.
- **HTML e CSS** para estrutura e estilização da interface.

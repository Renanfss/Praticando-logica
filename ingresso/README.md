# Sistema de Compra de Ingressos

Este projeto implementa um sistema simples para a compra de ingressos, garantindo controle da quantidade disponível e validação das compras.

## Como funciona

### Função `comprar()`
- Obtém a quantidade informada pelo usuário.
- Obtém o tipo de ingresso selecionado.
- Chama a função `calculo()` para verificar e atualizar a quantidade disponível.
- Reseta o campo de entrada após a compra.

### Função `calculo(tipoIngresso, quantidade)`
- Obtém o número disponível de ingressos para o tipo selecionado.
- Valida se a quantidade informada é maior que zero.
- Verifica se há ingressos suficientes para a compra.
- Caso haja ingressos disponíveis, atualiza a quantidade restante na interface.
- Caso contrário, exibe um alerta informando a indisponibilidade.

## Tecnologias utilizadas
- **JavaScript** para manipulação do DOM e lógica de validação.
- **HTML e CSS** para estrutura e estilização da interface.

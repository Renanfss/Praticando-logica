# Carrinho de Compras Simples

Este projeto implementa um sistema de carrinho de compras interativo utilizando JavaScript.

## Como funciona

### Função `adicionar()`
- Obtém o produto selecionado pelo usuário e a quantidade informada.
- Valida se a quantidade é maior que zero. Caso contrário, exibe um alerta e limpa o carrinho.
- Calcula o preço total do item (quantidade x preço unitário).
- Adiciona o item ao carrinho, atualizando a lista exibida na página.
- Atualiza o valor total do carrinho.

### Função `selecionarProduto()`
- Captura a opção de produto selecionada no formulário.
- Separa o nome e o preço do produto a partir do formato "Nome - R$Preço".
- Retorna um objeto contendo `nome` e `preco` do produto.

### Função `limpar()`
- Reseta o total da compra para zero.
- Remove todos os itens da lista de produtos exibida.
- Atualiza a exibição do valor total na página.

## Tecnologias utilizadas
- **JavaScript** para manipulação do DOM e controle do carrinho.
- **HTML e CSS** para estrutura e estilização da interface.

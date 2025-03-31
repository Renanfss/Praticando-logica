# Sorteio de Amigos

Este projeto implementa um sistema simples para adicionar amigos a uma lista e realizar um sorteio para formar pares.

## Como funciona

### Função `adicionar()`
- Captura o nome digitado no input.
- Valida se o campo está vazio e impede a adição de entradas inválidas.
- Verifica se o nome já está na lista, evitando duplicatas.
- Adiciona o nome à lista `nomeAmigos`.
- Atualiza a exibição da lista de amigos.

### Função `sortear()`
- Verifica se há pelo menos 3 amigos na lista (número mínimo para um sorteio válido).
- Embaralha a lista usando a função `embaralha(lista)`.
- Gera pares de amigos, garantindo que o último amigo da lista seja pareado com o primeiro.
- Exibe o resultado do sorteio na página.

### Função `embaralha(lista)`
- Implementa o algoritmo de embaralhamento Fisher-Yates.
- Troca os elementos de posição aleatoriamente para garantir um sorteio justo.

### Função `reiniciar()`
- Limpa a lista de amigos e o campo de entrada.
- Reseta os resultados do sorteio.

## Tecnologias utilizadas
- **JavaScript** para manipulação do DOM e lógica do sorteio.
- **HTML e CSS** para estrutura e estilos da interface.

---

# Gerenciamento de Aluguel de Jogos

Este projeto implementa a funcionalidade de alterar o status de aluguel de um jogo em um dashboard interativo usando JavaScript.

## Como funciona

A função `alterarStatus(gameId)` é chamada quando o usuário clica no botão de "Alugar" ou "Devolver" de um jogo específico. O código realiza as seguintes operações:

1. Obtém o elemento do jogo com base no `gameId`.
2. Recupera a imagem, o botão e o nome do jogo dentro do elemento.
3. Verifica se o jogo já está alugado verificando a classe CSS `dashboard__item__img--rented`.
4. Se o jogo estiver alugado:
   - Exibe uma confirmação perguntando ao usuário se deseja devolver o jogo.
   - Se confirmado, remove a classe de "alugado" da imagem, altera o estilo do botão e diminui o contador de jogos alugados.
5. Se o jogo não estiver alugado:
   - Adiciona a classe de "alugado" à imagem, altera o estilo do botão para "Devolver" e aumenta o contador de jogos alugados.
6. Exibe no console a quantidade total de jogos alugados.

## Exemplo de uso

Para usar essa função, cada jogo deve ter um `id` no formato `game-{id}` e conter elementos com as classes:

- `.dashboard__item__img` (Imagem do jogo)
- `.dashboard__item__button` (Botão de ação)
- `.dashboard__item__name` (Nome do jogo)

Quando um usuário interagir com o botão, a função `alterarStatus(gameId)` será acionada e atualizará o estado do jogo no dashboard.

## Tecnologias utilizadas

- **JavaScript** para manipulação do DOM e atualização do estado dos jogos.
- **HTML e CSS** para estrutura e estilos do dashboard.




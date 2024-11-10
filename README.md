# Sorteio de Números :crystal_ball:

## Descrição

Este projeto é um aplicativo de sorteio simples em JavaScript que permite sortear uma quantidade especifica de números dentro de um intervalo definido. 

O código realiza verificações para garantir que as entradas estejam corretas e que os números sorteados sejam únicos. O resultado do sorteio é exibido na página, e há uma opção para reiniciar o sorteio. Projeto realizado pelo curso de logica de programação na [Alura](https://cursos.alura.com.br/).

Acesse o Sorteador de nomes [aqui](https://sorteador-nine-sandy.vercel.app/)

## Funcionalidades

- **Sorteio de Números**: O usuário define uma quantidade de números a serem sorteados dentro de um intervalo e o aplicativo retorna uma lista de números aleatórios e únicos.
- **Verificação de Entradas**: O código verifica se as entradas são válidas e alerta o usuário caso algum campo esteja em branco ou se a quantidade de números seja maior que o intervalo.
- **Botão de Reiniciar**: Após o sorteio, o usuário pode limpar os campos e realizar um novo sorteio usando o botão de reiniciar.

## Estrutura de Código

- **Variável `sorteioRealizado`**: Controla se o sorteio já foi realizado, ajudando a gerenciar o estado do botão de reiniciar.
- **Função `sortear()`**: Função principal para o sorteio. Obtém as entradas do usuário, realiza a validação e sorteia números dentro do intervalo. Exibe o resultado na página.
- **Função `getRandomIntInclusive(min, max)`**: Gera um número inteiro aleatório entre `min` e `max`.
- **Função `trocarStatusBotao()`**: Habilita ou desabilita o botão de reiniciar conforme o estado do sorteio.
- **Função `reiniciar()`**: Redefine os campos de entrada e o resultado para permitir um novo sorteio.

## Como Usar

1. Insira a **quantidade de números** a serem sorteados.
2. Defina o intervalo, com os campos **"de"** e **"até"** para o sorteio.
3. Clique no botão **Sortear** para gerar os números aleatórios.
4. Para realizar um novo sorteio, clique em **Reiniciar**.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

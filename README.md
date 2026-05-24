# Trabalho Prático - Semana 12

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Vamos dar um exemplo, se você escolheu o Portal de notícias locais, então sua página principal (home-page) mostra todas as notícias. Ao clicar no titulo ou na imagem de uma notícia específica, você é direcionado para a página de detalhes que trará o texto completo da notícia, o autor e outros detalhes adicionais sobre aquela notícia. O mesmo vai acontecer para todos os demais tipos de projetos. 

IMPORTANTE: Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

## Informações Gerais

- Nome: Pedro Henrique Alves Ferreira
- Matricula: 913940
- Endpoint: Filmes populares

## Prints do trabalho
### Filmes Carregados
[!Filmes Carregados](./public/imgs/filmes-carregados.png)
### Filmes Filtrados
[!Filmes Filtrados](./public/imgs/filmes-filtrados.png)

## Descrição

Ao disparar o evento (carregamento ou clique), o sistema faz uma requisição assíncrona (fetch) à API do TMDB para buscar a lista de filmes populares. Em seguida, ocorre o tratamento, onde os dados brutos são convertidos para JSON e filtrados com base na data inserida pelo usuário. Por fim, a renderização reconstrói o HTML dinamicamente agrupando os cards em linhas (rows) de três colunas e atualiza a tela de forma imediata.

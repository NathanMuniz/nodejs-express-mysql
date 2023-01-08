## Node.JS Rest Apis com Express e MySQL

## Visão geral

Essa aplicação tem endpoint para criar, atualizar, deletar e buscar dados do nosso object Tutorial(O nome “tutorial”, foi usado apenas para fins de testes).

Principais endpoints que serão exportados

- GET - api/tutorials - Retorna todos Tutoriais
- GET - api/tutorials/:id - Retorna 1 Tutorial por id
- POST - api/tutorials/:id - Adiciona um novo Tutorial
- PUT - api/tutorials/:id Atualiza Tutorial por id
- DELETE - api/tutorials/:id Deleta Tutorial por id
- DELETE - api/tutorials - Deleta todos Tutoriais
- GET - api/tutorials/published - Busca todos Tutoriais publicados
- GET - api/tutorials?title=[kw] - Busca todos tutorials que contém o ‘kw’ no título

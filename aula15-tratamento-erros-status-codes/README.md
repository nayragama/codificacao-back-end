# Aula 15 — Tratamento de erros e códigos HTTP

Nesta aula, desenvolvi uma API de produtos com NestJS para praticar o tratamento de erros em requisições HTTP.

Criei um serviço com uma lista de produtos e um controller para buscar um produto pelo ID na rota `GET /produtos/:id`. A rota converte o ID recebido na URL para número, procura o produto na lista e retorna respostas diferentes conforme o resultado.

## Respostas da API

- **200 OK:** o produto foi encontrado e seus dados são retornados em JSON.
- **400 Bad Request:** o ID informado não é numérico.
- **404 Not Found:** não existe produto com o ID informado.

Também usei o `Logger` do NestJS para registrar avisos quando alguém informa um ID inválido ou procura um produto inexistente.

Testei as três situações: a busca pelo produto `6` retornou seus dados, a busca com uma letra retornou **400** e a busca pelo ID `9` retornou **404**. Com isso, pratiquei o uso de `BadRequestException`, `NotFoundException` e códigos de status para deixar as respostas da API mais claras.
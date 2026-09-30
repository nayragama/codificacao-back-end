# Aula 12 — Requisições e respostas avançadas

Nesta aula, desenvolvi uma API com NestJS para praticar o recebimento de dados de uma requisição e a personalização da resposta enviada ao cliente.

## O que fiz

- Criei a rota `GET /status`, que retorna a mensagem **“Status: Servidor Ativo!”**.
- Criei a rota `GET /secret`, que lê a chave enviada no cabeçalho `y-api-key`.
- Configurei respostas diferentes para chave válida e chave inválida ou ausente: status **200** para acesso concedido e **403** para acesso negado.
- Adicionei um cabeçalho de resposta e um registro de data e hora no retorno.
- Registrei os controllers no módulo da aplicação.

Com essa atividade, pratiquei o uso de headers, códigos de status HTTP e respostas em JSON no NestJS.
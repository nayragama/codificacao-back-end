# Aula 14 — Função Edge com Vercel

Nesta aula, criei uma função de API para estudar o funcionamento do Edge Runtime na Vercel. A função foi adicionada ao arquivo `api/hora-servidor.ts` e configurada para responder a requisições HTTP.

Ao acessar a rota `GET /api/hora-servidor`, a API retorna uma resposta em JSON com uma mensagem, o horário do servidor em formato ISO, a região definida para o exercício e o tempo de execução da função.

Executei o projeto localmente com `vercel dev` e testei a rota. A requisição retornou o status **200 OK** e os dados esperados no JSON.

## O que pratiquei

- Criação de uma função de API na pasta `api`.
- Configuração do runtime `edge`.
- Uso dos objetos `Request` e `Response`.
- Retorno de dados em JSON com o cabeçalho `content-type`.
- Teste de uma rota HTTP em ambiente local.
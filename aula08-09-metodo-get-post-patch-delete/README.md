🚀 Aula 08 e 09 — Métodos GET e POST com NestJS

📌 Descrição da atividade

Nesta atividade, pratiquei a criação de uma API utilizando o framework NestJS.

Desenvolvi um controller para trabalhar com convidados, utilizando os métodos HTTP "GET" e "POST". A rota "GET" retorna uma lista de convidados, enquanto a rota "POST" recebe os dados de um novo convidado e confirma o seu cadastro.

Também criei um DTO para definir e organizar os dados recebidos pela aplicação.

---

📚 O que pratiquei

- Criação de um projeto com NestJS;
- Organização da estrutura da aplicação;
- Criação de controllers;
- Utilização dos métodos HTTP "GET" e "POST";
- Recebimento de dados com o decorator "@Body()";
- Criação de DTO;
- Retorno de respostas no formato JSON;
- Registro do controller no módulo principal;
- Teste das rotas da API.

---

🛣️ Rotas criadas

Listar convidados

GET /convidados

Essa rota retorna a lista de convidados cadastrados.

Cadastrar convidado

POST /convidados

Exemplo do corpo da requisição:

{
  "nome": "Novo convidado"
}

A aplicação retorna uma mensagem confirmando que o convidado foi adicionado com sucesso.

---

📂 Principais arquivos

- "src/convidados.controller.ts": contém as rotas "GET" e "POST";
- "src/criar-convidados.dto.ts": define os dados do convidado;
- "src/app.module.ts": registra os componentes da aplicação;
- "src/main.ts": inicializa o servidor NestJS.

---

▶️ Como executar

Instale as dependências:

npm install

Inicie a aplicação:

npm run start:dev

Acesse ou teste a rota pelo navegador, Postman ou Insomnia:

http://localhost:3000/convidados

---

🛠️ Tecnologias utilizadas

- Node.js;
- TypeScript;
- NestJS;
- NPM;
- Git;
- GitHub.
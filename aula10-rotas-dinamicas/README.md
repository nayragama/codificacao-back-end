🚀 Aula 10 — Rotas Dinâmicas com NestJS

📌 Descrição da atividade

Nesta atividade, pratiquei a criação de rotas dinâmicas utilizando o framework NestJS.

Foi criada uma rota de status para verificar se o servidor está funcionando e uma rota dinâmica para buscar jogos por meio de seu identificador ("id").

A aplicação possui uma lista de jogos armazenada no serviço. Quando um identificador é informado na URL, o sistema procura o jogo correspondente e retorna seus dados. Caso o jogo não exista, a aplicação retorna uma exceção informando que o registro não foi encontrado.

---

📚 O que pratiquei

- Criação de rotas com NestJS;
- Criação de controllers e services;
- Injeção de dependência no NestJS;
- Utilização do decorator "@Controller()";
- Criação de rotas com o decorator "@Get()";
- Captura de parâmetros da URL com "@Param()";
- Utilização de parâmetros dinâmicos;
- Conversão do parâmetro da URL com "ParseIntPipe";
- Busca de informações em uma lista com o método "find()";
- Tratamento de registros inexistentes;
- Utilização de "NotFoundException";
- Registro de controllers e services no módulo principal;
- Inicialização da aplicação na porta "3000".

---

🛣️ Rotas criadas

Verificar o status do servidor

GET /status

Essa rota retorna a seguinte mensagem:

Status Servidor: Ativo!

Buscar um jogo pelo ID

GET /jogos/:id

Exemplo:

GET /jogos/1

Resposta esperada:

{
  "id": 1,
  "titulo": "Minecraft",
  "estudio": "Mojang Studios"
}

Caso seja informado um ID que não existe, a aplicação retorna uma mensagem de erro indicando que o jogo não foi localizado.

---

🎮 Jogos cadastrados

A aplicação possui inicialmente os seguintes jogos:

- Minecraft;
- The Legend of Zelda: Ocarina of Time;
- Grand Theft Auto V;
- Elden Ring;
- God of War.

---

📂 Principais arquivos

- "src/app.controller.ts": contém a rota de status do servidor;
- "src/app.service.ts": retorna a mensagem de funcionamento da aplicação;
- "src/jogos.controller.ts": recebe o ID informado na rota;
- "src/jogos.service.ts": armazena os jogos e realiza a busca pelo ID;
- "src/app.module.ts": registra os controllers e services;
- "src/main.ts": inicializa a aplicação na porta "3000".

---

▶️ Como executar

Instale as dependências:

npm install

Inicie o servidor:

npm run start:dev

Teste as rotas pelo navegador, Postman ou Insomnia:

http://localhost:3000/status

http://localhost:3000/jogos/1

---

🛠️ Tecnologias utilizadas

- Node.js;
- TypeScript;
- NestJS;
- NPM;
- Git;
- GitHub.

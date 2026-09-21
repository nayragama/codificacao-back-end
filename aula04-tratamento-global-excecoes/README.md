# Aula 04 — Tratamento global de exceções

## 📚 Descrição da atividade

Nesta atividade, criei um servidor com **Node.js e Express** para praticar o tratamento de erros em uma aplicação Back-End.

Implementei rotas que simulam erros síncronos e assíncronos. Nessas rotas, usei `try/catch` e `next(erro)` para encaminhar as falhas a um middleware global, que registra o erro no terminal e devolve uma resposta JSON com o status e a mensagem correspondente.

Também utilizei eventos do `process` para observar erros não tratados, como `uncaughtException` e `unhandledRejection`.

## 🎯 O que pratiquei

- Criação de rotas com Express;
- Tratamento de erros síncronos e assíncronos;
- Uso de `try/catch` e `next(erro)`;
- Criação de um middleware global de erros;
- Respostas de erro em formato JSON;
- Monitoramento de exceções e rejeições não tratadas.

> As falhas de processamento e de consulta ao banco de dados foram **simuladas** para estudar o comportamento da aplicação. Esta atividade não realiza uma conexão real com banco de dados.

## 🛠️ Tecnologias utilizadas

- JavaScript;
- Node.js;
- Express;
- NPM;
- Git e GitHub.

## ▶️ Como executar

Na pasta da atividade, instale as dependências e inicie o servidor:

```bash
npm install
node server.js
```

O servidor ficará disponível na porta `3000`. Para observar o tratamento de erros, acesse as rotas `/erro-s
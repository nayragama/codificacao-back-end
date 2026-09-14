# Aula 02 — Módulos CommonJS e ES Modules

## 📚 Descrição da atividade

Nesta atividade, pratiquei a organização e a reutilização de códigos em **Node.js** utilizando módulos JavaScript.

Criei o arquivo `utilitario.js`, responsável por exportar a função `formatLog()`. Essa função recebe uma mensagem e acrescenta automaticamente a data e a hora atuais.

No arquivo `index.js`, utilizei a função criada para formatar mensagens do sistema e registrar informações como:

- Conexão com o banco de dados;
- Inicialização do servidor;
- Data e horário de cada registro.

As mensagens formatadas foram salvas no arquivo `syslog.log`, localizado dentro da pasta `Logs`.

## 🎯 Objetivos

- Compreender o funcionamento dos módulos no Node.js;
- Praticar a exportação e importação de funções;
- Utilizar o padrão ES Modules;
- Trabalhar com datas e horários em JavaScript;
- Criar e armazenar registros de atividades em arquivos de log;
- Organizar o projeto em diferentes arquivos e pastas.

## 🛠️ Tecnologias utilizadas

- JavaScript;
- Node.js;
- NPM;
- ES Modules;
- Git;
- GitHub;
- Visual Studio Code.

## 📂 Estrutura do projeto

- `index.js` — arquivo principal da aplicação;
- `utilitario.js` — contém a função que formata as mensagens;
- `package.json` — configurações do projeto;
- `Logs/syslog.log` — armazena os registros gerados;
- `README.md` — documentação da atividade.

## ▶️ Como executar

Abra o terminal dentro da pasta da atividade e execute:

```bash
node index.js
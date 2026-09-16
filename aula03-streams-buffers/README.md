# Aula 03 — Streams e Buffers no Node.js

## 📚 Descrição da atividade

Nesta atividade, pratiquei o uso de **Streams e Buffers no Node.js** para gerar, ler e processar grandes quantidades de dados sem carregar todo o conteúdo de uma vez na memória.

Primeiro, desenvolvi o arquivo `gerarLogGigante.js`, que utiliza uma **Write Stream** para criar o arquivo `servidor.log` com milhares de registros simulados. Os registros contêm data, horário, número da linha, status e mensagens dos tipos `INFO` e `ERROR`.

Depois, criei o arquivo `processarLogs.js`, responsável por ler o arquivo `servidor.log` linha por linha com **Read Stream** e `readline`. Durante o processamento, o programa identifica somente as mensagens que contêm `ERROR` e grava essas informações no arquivo `apenas-erros.log`.

Também utilizei o método `process.memoryUsage()` para acompanhar o consumo de memória no início e no final do processamento.

## 🎯 Objetivos

- Compreender o funcionamento de Streams no Node.js;
- Criar arquivos utilizando `createWriteStream`;
- Ler arquivos grandes com `createReadStream`;
- Processar informações linha por linha;
- Filtrar registros de erro;
- Trabalhar com operações assíncronas;
- Monitorar o consumo de memória da aplicação;
- Evitar o carregamento completo de arquivos grandes na memória.

## ⚙️ Funcionamento

O projeto realiza as seguintes etapas:

1. Gera um arquivo chamado `servidor.log`;
2. Cria milhares de registros simulados;
3. Classifica as mensagens como `INFO` ou `ERROR`;
4. Lê o arquivo de log linha por linha;
5. Filtra apenas as mensagens de erro;
6. Salva os erros encontrados em `apenas-erros.log`;
7. Exibe no terminal a quantidade de erros encontrados;
8. Mostra o consumo de memória no início e no final.

## 🛠️ Tecnologias utilizadas

- JavaScript;
- Node.js;
- ES Modules;
- Módulo `fs`;
- Módulo `readline`;
- Streams;
- Buffers;
- NPM;
- Git e GitHub;
- Visual Studio Code.

## 📂 Estrutura do projeto

- `gerarLogGigante.js` — gera o arquivo com os registros simulados;
- `processarLogs.js` — lê, processa e filtra as mensagens;
- `servidor.log` — contém todos os registros gerados;
- `apenas-erros.log` — contém somente as mensagens de erro;
- `package.json` — configurações do projeto;
- `README.md` — documentação da atividade.

## ▶️ Como executar

Primeiro, gere o arquivo de log:

```bash
node gerarLogGigante.js
```

Depois, processe e filtre os registros:

```bash
node processarLogs.js
```

Ao finalizar, o programa mostrará no terminal a quantidade de erros encontrados e o consumo de memória. Os registros filtrados estarão disponíveis no arquivo `apenas-erros.log`.

## 👩‍💻 Autoria

Desenvolvido por **Nayra Ferreira Gama**.
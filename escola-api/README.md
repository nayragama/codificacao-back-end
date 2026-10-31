# API de Alunos

API desenvolvida com NestJS e MongoDB para cadastrar e gerenciar alunos. O projeto permite criar, listar, consultar por ID, atualizar e remover registros.

## O que foi desenvolvido

Organizei os arquivos do projeto para separar as responsabilidades da API:

- **Schema:** define como os dados do aluno são armazenados no MongoDB.
- **DTO:** define as regras de validação dos dados recebidos.
- **Service:** contém as operações de cadastro, consulta, atualização e remoção.

O schema de aluno contém `nome`, `idade`, `matricula` e `cursos`. Nome, idade e matrícula são campos obrigatórios; a matrícula foi definida como única. O campo `cursos` armazena uma lista de textos.

No `AlunosService`, implementei as operações de criação, listagem de todos os alunos, busca por ID, atualização e exclusão. Nas operações por ID, utilizei `NotFoundException` para informar quando o aluno não é encontrado.

Criei o `CreateAlunoDto` com regras do `class-validator`. O nome e a matrícula devem ser textos e não podem estar vazios; a idade deve ser um número inteiro maior ou igual a zero; e a lista de cursos deve conter pelo menos um item, sendo cada curso um texto.

No `main.ts`, configurei o `ValidationPipe` global com `whitelist`, `forbidNonWhitelisted` e `transform` para aplicar as regras dos DTOs às requisições.

## Como executar

É necessário ter o Node.js instalado e uma conexão com o MongoDB configurada no projeto.

1. Abra um terminal na pasta `escola-api`.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Confira em `src/app.module.ts` se a conexão com o MongoDB está configurada para um banco acessível.
4. Inicie a API:

   ```bash
   npm run start:dev
   ```

A API utiliza a porta `3000` por padrão, conforme a configuração mostrada no `main.ts`.

## Como testar o cadastro

No Postman, crie uma requisição com:

- **Método:** `POST`
- **URL:** `http://localhost:3000/alunos`
- **Body:** `raw`, no formato `JSON`

Exemplo de dados válidos:

```json
{
  "nome": "Ana Silva",
  "idade": 19,
  "matricula": "A001",
  "cursos": ["Informática"]
}
```

Também testei o envio de dados inválidos, como nome vazio, idade negativa, matrícula vazia e lista de cursos sem itens. A API respondeu com `400 Bad Request` e apresentou as mensagens de validação correspondentes. Por fim, conferi no MongoDB Compass os documentos salvos na coleção `alunos`.
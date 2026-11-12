# Escola API

API REST para cadastro e gerenciamento de alunos, desenvolvida com **NestJS**, **TypeScript**, **MongoDB** e **Mongoose**. O projeto permite criar, listar, consultar, atualizar e remover alunos, além de praticar paginação, filtros, ordenação e documentação de rotas com Swagger.

## Funcionalidades

- Cadastrar alunos com nome, idade, matrícula e cursos.
- Listar alunos com paginação.
- Filtrar a listagem por nome e curso.
- Ordenar os resultados por campo e direção.
- Consultar um aluno pelo ID.
- Atualizar os dados de um aluno.
- Remover um aluno.
- Impedir matrículas duplicadas por meio de um índice único no MongoDB.

## Estrutura de um aluno

```json
{
  "nome": "Ana Clara Souza",
  "idade": 19,
  "matricula": "4827",
  "cursos": ["Administração", "Engenharia Civil"]
}
```

O MongoDB acrescenta um `_id` ao documento salvo. A matrícula deve ser diferente para cada aluno.

## Tecnologias utilizadas

- **NestJS:** estrutura da API e definição das rotas.
- **TypeScript:** linguagem utilizada no projeto.
- **MongoDB:** banco de dados que armazena os alunos.
- **Mongoose:** integração entre a aplicação e o MongoDB.
- **Swagger:** documentação interativa da API.

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/alunos` | Cadastra um aluno |
| `GET` | `/alunos` | Lista alunos com paginação e filtros |
| `GET` | `/alunos/:id` | Consulta um aluno pelo ID |
| `PATCH` | `/alunos/:id` | Atualiza um aluno |
| `DELETE` | `/alunos/:id` | Remove um aluno |

## Cadastrar um aluno

Envie uma requisição `POST` para `http://localhost:3000/alunos` com o corpo em formato JSON:

```json
{
  "nome": "Ana Clara Souza",
  "idade": 19,
  "matricula": "4827",
  "cursos": ["Administração", "Engenharia Civil"]
}
```

Também é possível testar essa operação pelo Swagger ou pelo Insomnia. Ao repetir uma matrícula já cadastrada, o índice único do MongoDB impede a gravação. O tratamento da resposta de erro depende da implementação da API.

## Listar e filtrar alunos

Envie uma requisição `GET` para:

```text
http://localhost:3000/alunos?page=1&limit=5
```

Parâmetros da listagem:

| Parâmetro | Função | Exemplo |
| --- | --- | --- |
| `page` | Página solicitada | `1` |
| `limit` | Quantidade de alunos por página | `5` |
| `nome` | Filtra pelo nome | `Ana` |
| `curso` | Filtra pelo curso | `Administração` |
| `orderBy` | Campo usado para ordenar | `nome` |
| `orderDirection` | Direção da ordenação | `asc` ou `desc` |

Exemplo com filtro e ordenação:

```text
http://localhost:3000/alunos?page=1&limit=5&nome=Ana&orderBy=nome&orderDirection=asc
```

A listagem retorna os alunos em `data` e os dados da paginação em `meta`, incluindo `total`, `page`, `limit` e `totalPages`.

> **Atenção:** para a ordenação funcionar, o controller precisa repassar `orderBy` e `orderDirection` ao service, e a consulta do Mongoose precisa aplicar `.sort(sort)`. Confira esses dois pontos na versão atual do código.

## Executar o projeto

Com o MongoDB configurado e as dependências instaladas, execute na pasta `escola-api`:

```bash
npm install
npm run start:dev
```

A API estará disponível em `http://localhost:3000`. Para consultar e testar as rotas pelo Swagger, acesse:

```text
http://localhost:3000/api
```

Confira a configuração de conexão com o MongoDB no projeto antes de iniciar a aplicação.
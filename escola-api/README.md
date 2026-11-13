# Escola API

API REST para cadastro e gerenciamento de alunos, desenvolvida com **NestJS**, **TypeScript**, **MongoDB** e **Mongoose**. O projeto permite criar, listar, consultar, atualizar e remover alunos, além de utilizar paginação, filtros, ordenação, tratamento de erros e documentação de rotas com Swagger.

## Funcionalidades

- Cadastrar alunos com nome, idade, matrícula e cursos.
- Listar alunos com paginação.
- Filtrar a listagem por nome e curso.
- Ordenar os resultados por campo e direção.
- Consultar um aluno pelo ID.
- Atualizar os dados de um aluno.
- Remover um aluno.
- Impedir matrículas duplicadas por meio de um índice único no MongoDB.
- Retornar uma mensagem específica quando houver tentativa de cadastrar uma matrícula repetida.
- Retornar erro `404` quando um aluno solicitado pelo ID não for encontrado.

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

Também é possível testar essa operação pelo Swagger ou pelo Insomnia. Quando o cadastro é realizado com sucesso, a API retorna o aluno criado.

### Matrícula duplicada

O campo `matricula` possui um índice único no MongoDB. Se já existir um aluno com a matrícula informada, o banco de dados impede a gravação. O serviço identifica esse erro e retorna **409 Conflict**, com a mensagem:

```text
Já existe um aluno cadastrado com essa matrícula
```

Para outros erros inesperados durante o cadastro, o serviço retorna um erro interno com a mensagem `Erro ao processar o cadastro do aluno`.

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

A listagem retorna os alunos em `data` e os dados da paginação em `meta`, incluindo `total`, `page`, `limit` e `totalPages`. O total considera os filtros utilizados na consulta.

> Para a ordenação funcionar, o controller deve enviar `orderBy` e `orderDirection` ao service. No service mostrado nas fotos, a consulta já aplica `.sort(sort)`.

## Consultar, atualizar e remover alunos

Para trabalhar com um aluno específico, utilize o `_id` gerado pelo MongoDB na rota `/alunos/:id`. Por exemplo:

```text
http://localhost:3000/alunos/SEU_ID_AQUI
```

- **GET:** retorna os dados do aluno.
- **PATCH:** atualiza as informações enviadas no corpo da requisição.
- **DELETE:** remove o aluno.

Nas três operações, se nenhum aluno for encontrado para o ID informado, a API retorna **404 Not Found**.

## Executar o projeto

Com o MongoDB configurado, abra o terminal na pasta `escola-api` e execute:

```bash
npm install
npm run start:dev
```

A API estará disponível em `http://localhost:3000`. Para consultar e testar as rotas pelo Swagger, acesse:

```text
http://localhost:3000/api
```
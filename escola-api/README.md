## API de alunos

Desenvolvi uma API de alunos com NestJS e MongoDB. O modelo de aluno contém nome, idade, matrícula e uma lista de cursos. No schema, defini a matrícula como um campo único.

No serviço, implementei as operações de cadastro, listagem, busca por ID, atualização e remoção de alunos. Para as buscas, atualizações e remoções por ID, adicionei uma resposta de “não encontrado” quando o aluno não existe.

Também criei um DTO com regras de validação para o cadastro: o nome e a matrícula são obrigatórios, a idade deve ser um número inteiro não negativo e a lista precisa conter pelo menos um curso. Configurei o `ValidationPipe` globalmente para aplicar essas regras às requisições.

Testei uma requisição `POST /alunos` com dados inválidos no Postman e recebi `400 Bad Request` com as mensagens correspondentes. Conferi no MongoDB os registros salvos na coleção `alunos`.
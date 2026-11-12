# Modelagem de Documentos em JSON para Bancos NoSQL

Este projeto reúne três exemplos de documentos JSON desenvolvidos para estudar a modelagem de dados em bancos NoSQL. Cada arquivo representa uma situação diferente: o cadastro de um aluno, uma publicação em rede social e um produto de loja.

Os exemplos mostram como organizar informações usando campos simples, objetos dentro de outros objetos e listas de dados.

## Arquivos do projeto

| Arquivo | O que representa |
| --- | --- |
| `aluno-escola.json` | Dados de um aluno, suas disciplinas e seu endereço |
| `post-rede-social.json` | Uma publicação com curtidas e comentários |
| `produto-loja-notebook.json` | Um notebook com especificações técnicas e tags |

## 1. Aluno: `aluno-escola.json`

Este documento representa o cadastro de um aluno. Ele contém informações como nome, nome social, matrícula, data de nascimento e curso.

O campo `disciplinas` é uma lista de objetos. Cada objeto guarda o nome de uma disciplina e a nota obtida pelo aluno. Já o campo `endereco` agrupa rua, número, bairro, cidade, estado e CEP dentro do próprio documento.

Com isso, os dados relacionados ao aluno ficam organizados em uma estrutura hierárquica.

## 2. Rede social: `post-rede-social.json`

Este documento representa uma publicação em rede social. Ele registra o autor, o texto e a data da postagem.

O campo `curtidas` é uma lista com os nomes de quem curtiu a publicação. O campo `comentarios` é uma lista de objetos: cada comentário possui seu próprio autor e texto.

Esse modelo permite incluir várias curtidas e comentários no mesmo documento.

## 3. Produto: `produto-loja-notebook.json`

Este documento representa um notebook disponível em uma loja. Ele contém nome, categoria, preço e quantidade em estoque.

O objeto `especificacoesTecn
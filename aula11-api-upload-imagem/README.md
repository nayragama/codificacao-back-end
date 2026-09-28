# Aula 11 — API de Upload de Imagens

Nesta aula, desenvolvi uma API de upload de imagens usando NestJS.

## O que foi feito

- Criei a rota `POST /imagem/upload` para receber imagens.
- Configurei o Multer para salvar os arquivos na pasta `uploads`.
- Usei UUID para gerar um nome único para cada imagem.
- Defini um limite de 2 MB por arquivo e uma validação dos formatos aceitos.
- Configurei a API para retornar o nome, o tamanho e a URL da imagem enviada.
- Disponibilizei os arquivos salvos por meio da rota `/api/uploads/`.

## Tecnologias utilizadas

- NestJS
- TypeScript
- Multer
- UUID

Com

# Project Blacksmith API

<div align="center">
<img src=https://i.imgur.com/3gfcAAM.png width="200px">
</div>

## Sobre
Projeto de um CRUD (Create, Read, Update, Delete) de uma loja de itens medievais, no formato de uma API feito
enquanto eu estudava na [Trybe](https://www.betrybe.com/).

## Aprendizados

  * Configuração de uma API utilizando Node e Express;
  
  * Organização de rotas utilizando Node e Express;

  * Configuração de variáveis de ambiente;

  * Estruturação de uma API utilizando TypeScript;
  
  * Criação de interfaces no TypeScript
  
  * Estruturação de variáveis e funções fortemente tipadas;


## Tecnologias Utilizadas

<a href="https://www.typescriptlang.org/">
<img 
     src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&logoWidth=20"
     alt="Typescript"
/>
</a>
<a href="https://nodejs.org/en/">
<img
     src="https://img.shields.io/badge/node.js-333333?style=for-the-badge&logo=nodedotjs&logoColor=77B65D&logoWidth=20"
     alt="Node.js"
/>   
</a>
<a href="https://expressjs.com/pt-br/">
<img
     src="https://img.shields.io/badge/express-90C53F?style=for-the-badge&logo=express&logoColor=fff&logoWidth=20"
     alt="Express"
/>   
</a>
</div>

## Rodando o projeto localmente

### Atenção!
Esse projeto utiliza variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e altere os valores de acordo com suas próprias configurações.

### Clonando o projeto
```
git clone git@github.com:marllomartin/blacksmith.git

cd blacksmith
```

### Instalando as dependências:
```
npm install
```
### Inicializando o projeto:
```
npm run
```
### Exemplos de uso

<details>
<summary><h4>Endpoint para o cadastro de novos usuários</h4></summary>
<p><b>POST</b> | http://localhost:3000/users</p>

body:
```json
{
  "username": "marllomartin",
  "classe": "Desenvolvedor",
  "level": 22,
  "password": "123voceleuoreadme"
}
```
response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoibWFybGxvbWFydGluIiwiY2xhc3NlIjoiRGVzZW52b2x2ZWRvciIsImxldmVsIjoxNSwicGFzc3dvcmQiOiJ2b2NlbGV1b3JlYWRtZSEifSwiaWF0IjoxNjU2NDI0ODUwLCJleHAiOjE2NTY0Mjg0NTB9.xLYN3tE4LrrtCZ7CEoml-aa_UKQs-zjDVYf1Z1xV8cQ"
}
```
</details>

<details>
<summary><h4>Endpoint para o login de usuários</h4></summary>
<p><b>POST</b> | http://localhost:3000/login</p>

body:
```json
{
  "username": "marllomartin",
  "password": "123voceleuoreadme"
}
```
response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoibWFybGxvbWFydGluIiwicGFzc3dvcmQiOiJ2b2NlbGV1b3JlYWRtZSEifSwiaWF0IjoxNjU2NDI1MTc3LCJleHAiOjE2NTY0Mjg3Nzd9.2kogI-3I2CQ2Fe_iP8KT5taNm4m4440gKEtPO9erHFY"
}
```
</details>

<details>
<summary><h4>Endpoint para a listagem dos produtos</h4></summary>
<p><b>GET</b> | http://localhost:3000/products</p>

response:
```json
[
  {
    "id": 1,
    "name": "Espada Simples",
    "amount": "10 peças de ouro",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Escudo Desnecessariamente Grande",
    "amount": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Adaga de Aço Valírico",
    "amount": "5 peças de ouro",
    "orderId": 2
  },
  {
    "id": 4,
    "name": "Chave Misteriosa",
    "amount": "1 peça de ouro",
    "orderId": null
  },
  {
    "id": 5,
    "name": "Elixir da Restauração",
    "amount": "23 peças de ouro",
    "orderId": 3
  },
  {
    "id": 6,
    "name": "Espada Enferrujada",
    "amount": "2 peças de ouro",
    "orderId": null
  },
  {
    "id": 7,
    "name": "Bota de Couro",
    "amount": "12 peças de ouro",
    "orderId": null
  },
  {
    "id": 8,
    "name": "Engenhoca Aleatória",
    "amount": "15 peças de ouro",
    "orderId": 3
  },
  {
    "id": 9,
    "name": "Cajado do Crepúsculo",
    "amount": "55 peças de ouro",
    "orderId": null
  }
]
```
</details>

<details>
<summary><h4>Endpoint para o registro de um novo produto</h4></summary>
<p><b>POST</b> | http://localhost:3000/products</p>

body:
```json
{
  "name": "Espada Lendária",
  "amount": "3560 peças de ouro"
}
```
response:

```json
{
  "id": 10,
  "name": "Espada Lendária",
  "amount": "3560 peças de ouro",
  "orderId": null
}
```
</details>

<details>
<summary><h4>Endpoint para a listagem de todos os pedidos</h4></summary>
<p><b>GET</b> | http://localhost:3000/orders</p>

response:

```json
[
  {
    "id": 1,
    "userId": 1,
    "productsIds": [
      2
    ]
  },
  {
    "id": 3,
    "userId": 2,
    "productsIds": [
      5,
      8
    ]
  },
  {
    "id": 2,
    "userId": 3,
    "productsIds": [
      3
    ]
  }
]
```
</details>

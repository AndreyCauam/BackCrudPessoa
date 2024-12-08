# BackCrudPessoa

Está é uma aplicação backend desenvolvida com Express de gerenciamento de pessoas.

## Tecnologias utilizadas

- Express
- Body-parser
- Compression
- Knex
- Mysql2

## Instalação

Como pré-requisto é necessário ter o Node.js e o mysql instalado. Crie um banco de dados no mysql e adicione a configurações do banco e a porta do servidor no env.

Aqui estão as vairáveies que você precisará preencher:

```sh
CLIENT_URL=
USER_DATABASE=
PASSWORD_DATABASE=
DATABASE=
PORT=8080
```  

### Etapas

#### 1- Rode as migrations para criar o banco de dados:

```sh
npx knex migrate:latest
```

#### 2- Rode os seeds para popular o banco

```sh
npx knex seed:run
```

#### 3- Para iniciar a aplicação rode o comando

```sh
npm run dev
```

### Acessando servidor

O servidor irá rodar na rota:

http://localhost:PORT
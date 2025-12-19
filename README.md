<<<<<<< HEAD
# 🏋️ gym-quest#

Aplicação mobile full-stack para gerenciamento de treinos de academia, com sistema de progressão por nível, XP, desafios e perfil de usuário.

O projeto foi desenvolvido com foco em **arquitetura**, **boas práticas**, **tipagem forte** e **regras de negócio bem definidas**, simulando um cenário real de produto.

---

## 📌 Objetivo do Projeto

Criar um aplicativo onde o usuário possa:

- Criar, editar e remover treinos
- Gerenciar exercícios dentro de cada treino
- Acompanhar sua evolução por meio de XP e níveis
- Receber desafios para subir de nível
- Centralizar todos os treinos em um perfil único

O projeto também tem como objetivo **aprofundar o uso de NestJS no backend** e **React Native no frontend**, utilizando TypeScript em toda a stack.

---

## 🧱 Arquitetura Geral

gym-app/
├── backend/ # API REST - NestJS + Prisma
└── mobile/ # App Mobile - Expo + React Native

markdown
Copiar código

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **JWT Authentication**
- **OAuth (Google / Apple / Instagram)**
- **Class Validator / Transformer**

### Frontend (Mobile)
- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation**
- **Axios**
- **Expo Vector Icons**

---

## 📦 Funcionalidades Planejadas

### 🔐 Autenticação
- Login com email/senha
- Login social (Google, Apple, Instagram)

### 👤 Perfil do Usuário
- Nome / Nick
- Email
- Telefone
- Idade
- Localização
- Level atual
- XP atual
- Barra de progresso

### 🏋️ Treinos (Workouts)
- Criar treino
- Editar treino
- Deletar treino
- Listar treinos do usuário

📌 Regras:
- Cada treino deve conter **no mínimo 6 exercícios**
- Validações feitas no backend

### 🏃 Exercícios
- Criar exercícios
- Editar exercícios
- Remover exercícios
- Marcar exercício como concluído

### ⭐ Sistema de XP e Level
- XP calculado por exercício concluído
- XP acumulado por treino
- Limite de level: **1 a 10**
- Subida de level condicionada a desafios

### 🎯 Desafios
- Gerados ao completar XP do nível atual
- Obrigatórios para subir de nível
- Progressão controlada

---

## 🧠 Regras de Negócio

- XP não sobe nível automaticamente
- Cada nível possui um desafio obrigatório
- XP por treino depende da quantidade de exercícios concluídos
- Validações críticas sempre feitas no backend

---

## 📁 Estrutura de Pastas (Backend)

backend/
├── src/
│ ├── auth/
│ ├── user/
│ ├── workout/
│ ├── exercise/
│ ├── challenge/
│ ├── database/
│ └── common/
├── prisma/
│ └── schema.prisma

yaml
Copiar código

---

## 📁 Estrutura de Pastas (Mobile)

mobile/
├── src/
│ ├── screens/
│ ├── components/
│ ├── context/
│ ├── services/
│ ├── types/
│ └── utils/

yaml
Copiar código

---

## 🚧 Status do Projeto

🟡 Em desenvolvimento  
Atualmente na fase de **estruturação do backend e modelagem do banco de dados**.

---

## 🚀 Próximos Passos

- Modelagem completa do banco de dados (Prisma)
- Implementação de autenticação
- CRUD de treinos e exercícios
- Sistema de XP, níveis e desafios
- Integração frontend com API

---

## 📄 Licença

Este projeto é apenas para fins educacionais e de portfólio.
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> 2334578 (estrutura inicial do projeto - prisma - usersService - em andamento)

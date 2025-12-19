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

/* eslint-disable prettier/prettier */
 
/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    exceptionFactory: (errors) => {
      const formattedErrors = errors.flatMap((error) =>
        Object.values(error.constraints || {}).map((message) => ({
          property: error.property,
          message,
        })),
      );

      return new BadRequestException({
        message:
          formattedErrors.length === 1
            ? `Erro no campo ${formattedErrors[0].property}`
            : 'Erro de validcomeração',
        errors: formattedErrors,
      });
    },
  }),
);

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Gym Quest Api')
    .setDescription(
      `
GymQuest API é uma API RESTful desenvolvida com NestJS, TypeScript e Prisma ORM, criada com o objetivo de servir como backend central para uma plataforma voltada à gestão e evolução de usuários no contexto fitness, saúde e performance.

O projeto foi estruturado seguindo boas práticas de arquitetura modular, separação de responsabilidades, DTOs com validação, tratamento de erros consistente e padrões REST, visando escalabilidade, manutenção e clareza no desenvolvimento.

Atualmente, a API possui um módulo de Users totalmente funcional, contemplando:
- Criação de usuários
- Listagem de usuários
- Busca por ID
- Atualização parcial de dados (PATCH)
- Validações de entrada com class-validator
- Tratamento explícito de erros, como usuário não encontrado

A camada de persistência é gerenciada pelo Prisma, garantindo tipagem forte, segurança e previsibilidade nas operações com o banco de dados. A aplicação segue o fluxo Controller → Service → Prisma, mantendo regras de negócio isoladas da camada de transporte.

O projeto encontra-se em desenvolvimento ativo, com foco inicial na construção de uma base sólida e bem documentada. As próximas etapas incluem:
- Padronização global de erros da API
- Evolução do modelo de usuário
- Implementação de autenticação e autorização
- Documentação progressiva via Swagger

Esta API também possui caráter educacional e profissional, sendo utilizada como projeto prático para aprofundamento em backend moderno com NestJS, além de servir como portfólio técnico demonstrando domínio em APIs, arquitetura e boas práticas.

Toda a documentação disponível neste Swagger reflete fielmente o estado atual da aplicação e será continuamente atualizada conforme novas funcionalidades forem incorporadas.
`,
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();

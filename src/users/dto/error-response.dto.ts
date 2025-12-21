import { ApiProperty } from '@nestjs/swagger';

export class ErrorDetailDTO {
  @ApiProperty({ example: 'E-mail' })
  property: string | null;

  @ApiProperty({ example: 'Infome um E-mail válido' })
  message: string;

  @ApiProperty({ example: 400 })
  statusCode: number;
}

export class ErrorResponseDTO {
  @ApiProperty({ example: 'Erro da validação' })
  message: string;

  @ApiProperty({ example: '/users' })
  path: string;

  @ApiProperty({ example: '2025-12-20T:40:00:00.000Z' })
  timestamp: string;
}

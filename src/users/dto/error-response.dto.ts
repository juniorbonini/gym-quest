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
}
